import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromSkill from './skill.reducer';
import { SkillState } from './skill.reducer';

export const selectSkillState = createFeatureSelector<SkillState>("skill");

export const selectAllSkills = createSelector(selectSkillState, fromSkill.selectAll);