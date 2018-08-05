import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

import { Store } from '@ngrx/store';
import * as fromRoot from '../core/app.reducers';
import * as SourceCodeActions from './source-code.actions';
import * as UIActions from '../shared/ui.actions';
import { SourceCodeEntry } from './source-code-entry.model';

@Injectable({
    providedIn: 'root'
})
export class SourceCodeService implements OnDestroy
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
     * Gets source code entries from Cloud Firestore and dispatches changes to ngrx store.
     */
    getSourceCodeEntriesFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.firebaseSubscription =
            this.db
                .collection('source-code', ref => ref.orderBy('order'))
                .snapshotChanges()
                .pipe(map(docArray => docArray.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return new SourceCodeEntry({ id, ...data });
                })))
                .subscribe(
                    (sourceCodeEntries: SourceCodeEntry[]) => {
                        this.store.dispatch(new SourceCodeActions.SetSourceCodeEntries(sourceCodeEntries));
                        this.store.dispatch(new UIActions.StopLoading);
                    },
                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                );
    }

    /**
     * Gets source code entries observable from ngrx store.
     */
    get selectSourceCodeEntriesFromStore(): Observable<SourceCodeEntry[]>
    {
        return this.store.select(fromRoot.getSourceCodeEntries);
    }
}