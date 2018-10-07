import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SkillService
{
    constructor(private db: AngularFirestore) { }

    get skillCollectionSnapshotChanged$()
    {
        return this.db.collection('home', ref => ref.orderBy('order')).snapshotChanges();
    }
}
