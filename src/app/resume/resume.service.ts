import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ResumeService
{
    jobAssignmentsCollectionSnapshotChanged$(jobId: string)
    {
        return this.db.collection(`resume/${jobId}/assignments`, ref => ref.orderBy('order')).snapshotChanges();
    }
    
    get degreesCollectionSnapshotChanged$()
    {
        return this.db.collection('resume', ref => ref.where('type', '==', 'degree').orderBy('order')).snapshotChanges();
    }
    
    get hobbiesCollectionSnapshotChanged$()
    {
        return this.db.collection('resume', ref => ref.where('type', '==', 'hobby').orderBy('order')).snapshotChanges();
    }

    get jobsCollectionSnapshotChanged$()
    {
        return this.db.collection('resume', ref => ref.where('type', '==', 'job').orderBy('order')).snapshotChanges();
    }

    constructor(private db: AngularFirestore,
                private http: HttpClient) { }

    dowloadcv(token: string): Observable<any>
    {
        return this.http.get(`https://us-central1-ng-cv-tinath.cloudfunctions.net/api/dowloadcv?token=${token}`);
    }
}