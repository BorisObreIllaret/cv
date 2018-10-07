import { Injectable } from '@angular/core';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { ResumeService } from './resume.service';
import Assignment from './assignment.model';
import Degree from './degree.model';
import Hobby from './hobby.model';
import Job from './job.model';
import { DegreesSet, HobbiesSet, JobsSet, JobAssignmentsRequested, ResumeActionsTypes, JobAssignmentsSet } from './resume.actions';

@Injectable()
export class ResumeEffects
{
    constructor(private actions$: Actions,
                private resumeService: ResumeService) { }

    @Effect()
    loadJobAssignments$ = this.actions$.pipe(
        ofType<JobAssignmentsRequested>(ResumeActionsTypes.JobAssignmentsRequested),
        mergeMap(action => this.resumeService.jobAssignmentsCollectionSnapshotChanged$(action.payload.id)),
        map(data =>
        {
            const entries: Assignment[] = [];

            data.filter(a => a.type === 'added' || a.type === 'modified')
                .forEach(assignment => {
                    const entry = new Assignment({
                        id: assignment.payload.doc.id,
                        jobId: assignment.payload.doc.ref.parent.parent.id,
                        ...assignment.payload.doc.data()
                    });
                    entries.push(entry);
                });

            return new JobAssignmentsSet({entries});
        })
    );

    @Effect()
    syncDegrees$ = this.resumeService.degreesCollectionSnapshotChanged$.pipe(
        map(actions =>
        {
            const entries: Degree[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                        const entry = new Degree({
                            id: action.payload.doc.id,
                            ...action.payload.doc.data()
                        });
                        entries.push(entry);
                    });

            return new DegreesSet({entries});
        })
    );

    @Effect()
    syncHobbies$ = this.resumeService.hobbiesCollectionSnapshotChanged$.pipe(
        map(actions => 
        {
            const entries: Hobby[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                       const entry = new Hobby({
                           id: action.payload.doc.id,
                           ...action.payload.doc.data()
                       });
                       entries.push(entry);
                   });

            return new HobbiesSet({entries});
        })
    );

    @Effect()
    syncJobs$ = this.resumeService.jobsCollectionSnapshotChanged$.pipe(
        map(actions =>
        {
            const entries: Job[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                       const entry = new Job({
                            id: action.payload.doc.id,
                            ...action.payload.doc.data()
                       });
                       entries.push(entry);
                   });

            return new JobsSet({entries});
        })
    );
}