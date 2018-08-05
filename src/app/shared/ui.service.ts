import { Subscription, Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { Store } from "@ngrx/store";
import * as fromRoot from '../core/app.reducers';
import * as UIActions from './ui.actions';

@Injectable({
    providedIn: 'root'
})
export class UIService
{
    constructor(private snackBar: MatSnackBar,
                private store: Store<fromRoot.State>) { }

    storeSelectIsLoading(): Observable<boolean>
    {
        return this.store.select(fromRoot.getIsLoading);
    }

    showSnackbar(message: string, action: string = null, duration: number = 4000)
    {
        this.snackBar.open(message, action, { duration: duration });
    }
}