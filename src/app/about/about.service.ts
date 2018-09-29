import { Subscription, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';
import * as fromRoot from '../core/app.reducers';
import * as AboutActions from './about.actions';
import * as UIActions from '../shared/ui.actions';
import { AboutEntry } from './about-entry.model';

@Injectable({
    providedIn: 'root'
})
export class AboutService implements OnDestroy
{
    private firebaseSubscription: Subscription;

    constructor(private db: AngularFirestore,
                private store: Store<fromRoot.State>,
                public snackBar: MatSnackBar) { }

    /**
     * Called just before Angular destroys the service.
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
        if (this.firebaseSubscription) this.firebaseSubscription.unsubscribe();
    }

    /**
     * Gets about entries from Cloud Firestore and dispatches changes to ngrx store.
     */
    private setAboutEntries(): void
    {
        this.firebaseSubscription =
            this.db
                .collection('about', ref => ref.orderBy('order'))
                .snapshotChanges()
                .pipe(
                    catchError(error => {
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                        this.store.dispatch(new UIActions.StopLoading);
                        return of([]); 
                    }),
                    tap(docArray => {
                        this.store.dispatch(new UIActions.StartLoading);
                        return docArray;
                    }),
                    map(docArray => docArray.map(doc => new AboutEntry({id: doc.payload.doc.id, ...doc.payload.doc.data()}))),
                    tap(aboutEntries => {
                        this.store.dispatch(new AboutActions.SetAboutEntries(aboutEntries));
                        this.store.dispatch(new UIActions.StopLoading);
                    }),           
                )
                .subscribe();
    }

    /**
     * Gets about entries observable from ngrx store.
     */
    get selectAboutEntriesFromStore(): Observable<AboutEntry[]>
    {
        this.setAboutEntries();
        return this.store.select(fromRoot.getAboutEntries);
    }
}