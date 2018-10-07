
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SourceCodeService
{
    constructor(private db: AngularFirestore) { }

    get sourceCodeCollectionSnapshotChanged$()
    {
        return this.db.collection('source-code', ref => ref.orderBy('order')).snapshotChanges();
    }
}