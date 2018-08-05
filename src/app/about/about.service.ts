import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

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
        if (this.firebaseSubscription) this.firebaseSubscription.unsubscribe();
    }
    
    /**
     * Gets about entries from Cloud Firestore and dispatches changes to ngrx store.
     */
    getAboutEntriesFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.firebaseSubscription =
            this.db
                .collection('about', ref => ref.orderBy('order'))
                .snapshotChanges()
                .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return new AboutEntry({ id, ...data });
                })))
                .subscribe(
                    (aboutEntries: AboutEntry[]) => {
                        this.store.dispatch(new AboutActions.SetAboutEntries(aboutEntries));
                        this.store.dispatch(new UIActions.StopLoading);
                    },
                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                );
    }

    /**
     * Gets about entries observable from ngrx store.
     */
    get selectAboutEntriesFromStore(): Observable<AboutEntry[]>
    {
        return this.store.select(fromRoot.getAboutEntries);
    }
}