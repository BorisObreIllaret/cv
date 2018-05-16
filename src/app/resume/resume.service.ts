import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

import Assignment from './assignment.model';
import Degree from './degree.model';
import Job from './job.model';
import Hobby from './hobby.model';

import { Store } from '@ngrx/store';
import * as fromRoot from '../core/app.reducers';
import * as ResumeActions from './resume.actions';
import * as UIActions from '../shared/ui.actions';

@Injectable()
export class ResumeService implements OnDestroy
{
    private degreesFirebaseSubscription: Subscription;
    private hobbiesFirebaseSubscription: Subscription;
    private jobsFirebaseSubscription: Subscription;

    constructor(private db: AngularFirestore,
                private store: Store<fromRoot.State>,
                public snackBar: MatSnackBar,
                private http: HttpClient) { }

    /**
     * Called just before Angular destroys the component.
     */
    ngOnDestroy(): void
    {
        this.cancelSubscriptions();
    }

    /**
     * Cancels every not null subscription.
     */
    private cancelSubscriptions(): void
    {
        if (this.degreesFirebaseSubscription) this.degreesFirebaseSubscription.unsubscribe();
        if (this.hobbiesFirebaseSubscription) this.hobbiesFirebaseSubscription.unsubscribe();
        if (this.jobsFirebaseSubscription) this.jobsFirebaseSubscription.unsubscribe();
    }

    /**
     * Gets degrees from Cloud Firestore and dispatches changes to ngrx store.
     */
    getDegreesFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.degreesFirebaseSubscription =
            this.db
                .collection('/resume', ref => ref.where('type', '==', 'degree').orderBy('order'))
                .snapshotChanges()
                .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return new Degree({ id, ...data });
                })))
                .subscribe(
                    (degrees: Degree[]) => {
                        this.store.dispatch(new ResumeActions.SetDegrees(degrees));
                        this.store.dispatch(new UIActions.StopLoading);
                    },
                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                )
    }

    /**
     * Gets hobbies from Cloud Firestore and dispatches changes to ngrx store.
     */
    getHobbiesFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.hobbiesFirebaseSubscription =
            this.db
                .collection('/resume', ref => ref.where('type', '==', 'hobby').orderBy('order'))
                .snapshotChanges()
                .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return new Hobby({ id, ...data });
                })))
                .subscribe(
                    (hobbies: Hobby[]) => {
                        this.store.dispatch(new ResumeActions.SetHobbies(hobbies));
                        this.store.dispatch(new UIActions.StopLoading);
                    },
                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                )
    }

    /**
     * Gets jobs from Cloud Firestore and dispatches changes to ngrx store.
     */
    getJobsFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.jobsFirebaseSubscription =
            this.db
                .collection('/resume', ref => ref.where('type', '==', 'job').orderBy('order'))
                .snapshotChanges()
                .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return new Job({ id, ...data });
                })))
                .subscribe(
                    (jobs: Job[]) => {
                        this.store.dispatch(new ResumeActions.SetJobs(jobs));
                        this.store.dispatch(new UIActions.StopLoading);
                    },
                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                );
    }

    dowloadcv(token: string): Observable<any>
    {
        return this.http.get(`https://us-central1-ng-cv-tinath.cloudfunctions.net/api/dowloadcv?token=${token}`);
    }

    /**
     * Gets assignments observable from ngrx store.
     */
    get selectAssignmentsFromStore(): Observable<Assignment[]>
    {
        return this.store.select(fromRoot.getAssignments);
    }

    /**
     * Gets degrees observable from ngrx store.
     */
    get selectDegreesFromStore(): Observable<Degree[]>
    {
        return this.store.select(fromRoot.getDegrees);
    }

    /**
     * Gets hobbies observable from ngrx store.
     */
    get selectHobbiesFromStore(): Observable<Hobby[]>
    {
        return this.store.select(fromRoot.getHobbies);
    }

    /**
     * Gets jobs observable from ngrx store.
     */
    get selectJobsFromStore(): Observable<Job[]>
    {
        return this.store.select(fromRoot.getJobs);
    }

    
    /**
     * Gets jobs from Cloud Firestore and tracks changes.
     * 
     * @returns {Observable<Job[]>}
     * Observable of jobs array synchronized with Cloud Firestore.
     */
    getJobsSnapshotChanges(): Observable<Job[]>
    {
        return this.db
                   .collection('/resume', ref => ref.where('type', '==', 'job').orderBy('order'))
                   .snapshotChanges()
                   .pipe(map(docArray => docArray.map(doc => {
                       const id = doc.payload.doc.id;
                       const data = doc.payload.doc.data();
                       const job = new Job({ id, ...data });
                       return job;
                   })));
    }

    /**
     * Gets achivements linked to the given job identifier from Cloud Firestore and tracks changes.
     * 
     * @param {string} jobId
     * Identifier of the job.
     * 
     * @return {Observable<Assignment[]>}
     * Observable of assignments array synchronized with Cloud Firestore.
     */
    getAssignmentsSnapshotChanges(jobId: string): Observable<Assignment[]>
    {
        return this.db
                   .collection(`/resume/${jobId}/assignments`, ref => ref.orderBy('order'))
                   .snapshotChanges()
                   .pipe(map(docArray => docArray.map(doc => {
                       const id = doc.payload.doc.id;
                       const data = doc.payload.doc.data();
                       const assignment = new Assignment({ id, jobId, ...data });
                       return assignment;
                   })));
    }

    /**
     * Gets degrees from Cloud Firestore and tracks changes.
     * 
     * @returns {Observable<Degree[]>}
     * Observable of degrees array synchronized with Cloud Firestore.
     */
    getDegreesSnapshotChanges(): Observable<Degree[]>
    {
        return this.db
                   .collection('/resume', ref => ref.where('type', '==', 'degree').orderBy('order'))
                   .snapshotChanges()
                   .pipe(map(docArray => docArray.map(doc => {
                       const id = doc.payload.doc.id;
                       const data = doc.payload.doc.data();
                       const degree = new Degree({ id, ...data });
                       return degree;
                   })));
    }

    /**
     * Get hobbies from Cloud Firestore and tracks changes.
     * 
     * @returns {Observable<Hobby[]>}
     * Observable of hobbies array synchronizes with Cloud Firestore.
     */
    getHobbiesSnapshotChanges(): Observable<Hobby[]>
    {
        return this.db
                   .collection('/resume', ref => ref.where('type', '==', 'hobby').orderBy('order'))
                   .snapshotChanges()
                   .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    const hobby = new Hobby({ id, ...data });
                    return hobby;
                })));
    }
}