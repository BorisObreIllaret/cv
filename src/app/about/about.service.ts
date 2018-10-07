
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AboutService
{
    constructor(private db: AngularFirestore) { }

    get aboutCollectionSnashotChanged$()
    {
        return this.db.collection('about', ref => ref.orderBy('order')).snapshotChanges();
    }
}