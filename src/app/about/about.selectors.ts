import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAbout from './about.reducer';
import { AboutState } from './about.reducer';

export const selectAboutState = createFeatureSelector<AboutState>("about");

export const selectAllAboutEntries = createSelector(selectAboutState, fromAbout.selectAll);