import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { AboutEntry } from './about-entry.model';
import { AboutActions, AboutActionsTypes } from './about.actions';

/**
 * Interface for about state.
 */
export interface AboutState extends EntityState<AboutEntry> { }

/**
 * Entity adapter for {@link AboutEntry} model.
 */
const adapter: EntityAdapter<AboutEntry> = createEntityAdapter<AboutEntry>();

/**
 * Default value for about state.
 */
const initialAboutState: AboutState = adapter.getInitialState();

/**
 * Reducer for about.
 * 
 * @param {AboutState} state
 * Current state.
 * 
 * @param {AboutActions} action
 * Action to apply.
 * 
 * @returns {AboutState}
 * New state according to action.
 */
export function aboutReducer(state: AboutState = initialAboutState, action: AboutActions): AboutState
{
    switch (action.type)
    {
        case AboutActionsTypes.AboutEntriesCleared:
            return adapter.removeAll(state);

        case AboutActionsTypes.AboutEntriesSet:
            return adapter.addAll(action.payload.entries, state);
        
        case AboutActionsTypes.AboutEntryAdded:
            return adapter.upsertOne(action.payload.entry, state);

        case AboutActionsTypes.AboutEntryModified:
            return adapter.upsertOne(action.payload.entry, state);

        case AboutActionsTypes.AboutEntryRemoved:
            return adapter.removeOne(action.payload.id, state);
        
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