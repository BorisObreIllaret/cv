import { ActionReducer } from '@ngrx/store';
import { SourceCodeEntry } from './source-code-entry.model';
import { SourceCodeActions, SourceCodeActionsTypes } from './source-code.actions';

/**
 * Interface for source code state.
 */
export interface State
{
    sourceCodeEntries: SourceCodeEntry[],
}

/**
 * Default value for source code state.
 */
const initialState: State =
{
    sourceCodeEntries: [],
}

/**
 * Reducer for source code.
 * 
 * @param {State} state
 * Current source code state.
 * 
 * @param {SourceCodeActions} action
 * Source code action.
 * 
 * @returns {State}
 * New source code state according to action.
 */
export function sourceCodeReducer(state: State = initialState, action: SourceCodeActions)
{
    switch (action.type)
    {
        case SourceCodeActionsTypes.SetSourceCodeEntries:
            return { ...state, sourceCodeEntries: action.payload };

        default:
            return { ...state };        
    }
}

/**
 * Returns the value of 'sourceCodeEntries' from the given source code state.
 * 
 * @param {State} state
 * Source code state.
 * 
 * @returns {SourceCodeEntry[]}
 * Current value of source code entries.
 */
export const getSourceCodeEntries = (state: State) => state.sourceCodeEntries;