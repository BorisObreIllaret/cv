import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Effect } from '@ngrx/effects';
import { SkillService } from './skill.service';
import { Skill } from './skill.model';
import { SkillsSet } from './skill.actions';

@Injectable()
export class SkillEffects
{
    constructor(private skillService: SkillService) { }

    @Effect()
    syncData$ = this.skillService.skillCollectionSnapshotChanged$.pipe(
        map(actions => 
        {
            const entries: Skill[] = [];

            actions.filter(a => a.type === 'added' || a.type === 'modified')
                   .forEach(action => {
                       const entry = new Skill({
                            id: action.payload.doc.id,
                            ...action.payload.doc.data()
                       });
                       entries.push(entry);
                   });

            return new SkillsSet({entries});
        })
    );
}