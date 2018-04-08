import { Subscription, Observable } from 'rxjs';

import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

import { Skill } from './skill.model';

import { Store } from '@ngrx/store';
import * as fromRoot from '../core/app.reducers';
import * as SkillActions from './skill.actions';
import * as UIActions from '../shared/ui.actions';

@Injectable()
export class SkillService implements OnDestroy
{
    private firebaseSubscription: Subscription;

    constructor(private db: AngularFirestore,
                private store: Store<fromRoot.State>,
                public snackBar: MatSnackBar) { }

    ngOnDestroy(): void
    {
        this.cancelSubscriptions();
    }

    getSkillsFromDb(): void
    {
        this.store.dispatch(new UIActions.StartLoading);

        this.firebaseSubscription =
            this.db
                .collection('home', ref => ref.orderBy('order'))
                .snapshotChanges()
                .map(docArray => docArray.map(doc => {
                    return new Skill({
                        id: doc.payload.doc.id,
                        competence: doc.payload.doc.data().competence,
                        experience: doc.payload.doc.data().experience,
                        chips: doc.payload.doc.data().chips,
                        skills: doc.payload.doc.data().skills,
                        order: doc.payload.doc.data().order,
                    });
                }))
                .subscribe(
                    (skills: Skill[]) => {
                        this.store.dispatch(new SkillActions.SetSkills(skills));
                        this.store.dispatch(new UIActions.StopLoading);
                    },

                    (error) => {
                        this.store.dispatch(new UIActions.StopLoading);
                        this.snackBar.open(`Une erreur s'est produite : ${error}`);
                    }
                );
    }

    storeSelectSkills(): Observable<Skill[]>
    {
        return this.store.select(fromRoot.getSkills);
    }

    private cancelSubscriptions(): void
    {
        if (this.firebaseSubscription) this.firebaseSubscription.unsubscribe();
    }
}
