import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Effect } from '@ngrx/effects';
import { SourceCodeService } from './source-code.service';
import { SourceCodeEntry } from './source-code-entry.model';
import { SourceCodeEntriesSet } from './source-code.actions';

@Injectable()
export class SourceCodeEffects
{
    constructor(private sourceCodeService: SourceCodeService) {}

    @Effect()
    syncData$ = this.sourceCodeService.sourceCodeCollectionSnapshotChanged$.pipe(
        map(actions =>
        {
            const entries: SourceCodeEntry[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                        const entry = new SourceCodeEntry({
                            id: action.payload.doc.id,
                            ...action.payload.doc.data()
                        });
                        entries.push(entry);
                    });

            return new SourceCodeEntriesSet({entries});
        })
    );
}