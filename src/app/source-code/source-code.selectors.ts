import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromSourceCode from './source-code.reducer';
import { SourceCodeState } from './source-code.reducer';

export const selectSourceCodeState = createFeatureSelector<SourceCodeState>("sourceCode");

export const selectAllSourceCodeEntries = createSelector(selectSourceCodeState, fromSourceCode.selectAll);