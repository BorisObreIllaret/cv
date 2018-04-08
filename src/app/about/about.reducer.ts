import { ActionReducer } from '@ngrx/store';
import { AboutEntry } from './about-entry.model';
import { AboutActions, AboutActionsTypes } from './about.actions';

/**
 * Interface for about state.
 */
export interface State
{
    aboutEntries: AboutEntry[],
}

/**
 * Default value for about state.
 */
const initialState: State =
{
    aboutEntries: [],
}

/**
 * Reducer for about.
 * 
 * @param {State} state
 * Current about state.
 * 
 * @param {AboutActions} action
 * About action.
 * 
 * @returns {State}
 * New about state according to action.
 */
export function aboutReducer(state: State = initialState, action: AboutActions)
{
    switch (action.type)
    {
        case AboutActionsTypes.SetAboutEntries:
            return { ...state, aboutEntries: action.payload };

        default:
            return { ...state };
    }
}

/**
 * Returns the value of 'aboutEntries' from the given about state.
 * 
 * @param {State} state
 * About state.
 * 
 * @returns {AboutEntry[]}
 * Current value of about entries.
 */
export const getAboutEntries = (state: State) => state.aboutEntries;