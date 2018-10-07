import { ActionReducer } from '@ngrx/store';
import { SourceCodeEntry } from './source-code-entry.model';
import { SourceCodeActions, SourceCodeActionsTypes } from './source-code.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/**
 * Interface for source code state.
 */
export interface SourceCodeState extends EntityState<SourceCodeEntry> { }


const adapter: EntityAdapter<SourceCodeEntry> = createEntityAdapter<SourceCodeEntry>();

/**
 * Default value for source code state.
 */
const initialState: SourceCodeState = adapter.getInitialState();

/**
 * Reducer for source code.
 * 
 * @param {SourceCodeState} state
 * Current state.
 * 
 * @param {SourceCodeActions} action
 * Action to apply.
 * 
 * @returns {SourceCodeState}
 * New state according to action.
 */
export function sourceCodeReducer(state: SourceCodeState = initialState, action: SourceCodeActions): SourceCodeState
{
    switch (action.type)
    {
        case SourceCodeActionsTypes.SourceCodeEntriesCleared:
            return adapter.removeAll(state);
        
        case SourceCodeActionsTypes.SourceCodeEntriesSet:
            return adapter.addAll(action.payload.entries, state);        

        default:
            return state;        
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();