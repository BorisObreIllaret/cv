import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Effect } from '@ngrx/effects';
import { AboutService } from './about.service';
import { AboutEntriesSet } from './about.actions';
import { AboutEntry } from './about-entry.model';

@Injectable()
export class AboutEffects
{
    constructor(private aboutService: AboutService) {}    

    @Effect()
    syncData$ = this.aboutService.aboutCollectionSnashotChanged$.pipe(
        map(actions =>
        {
            const entries: AboutEntry[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                        const entry = new AboutEntry({
                            id: action.payload.doc.id,
                            ...action.payload.doc.data()
                        });
                        entries.push(entry);
                    });

            return new AboutEntriesSet({entries});
        })
    );

    // syncData$ = this.aboutService.aboutCollectionSnashotChanged$.pipe(
    //     mergeMap(actions => actions),
    //     map(action =>
    //     {
    //         console.log('About entry action: ', action); 
            
    //         const id = action.payload.doc.id;            
    //         const entry = new AboutEntry({ id, ...action.payload.doc.data() });
            
    //         switch (action.type)
    //         {
    //             case 'added':
    //                 return new AboutEntryAdded({entry});

    //             case 'modified':
    //                 return new AboutEntryModified({id, entry});

    //             case 'removed':
    //                 return new AboutEntryRemoved({id});
    //         }
    //     }),
    // );
}