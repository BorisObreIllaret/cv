import { ActionReducer } from '@ngrx/store';

import { UIActions, UIActionsTypes } from './ui.actions';

/**
 * Interface for UI state.
 */
export interface State
{
    isLoading: boolean,
}

/**
 * Default values for UI state.
 */
const initialState: State =
{
    isLoading: false,
}

/**
 * Reducer for UI
 * 
 * @param {State} state
 * Current UI state.
 * 
 * @param {UIActions} action
 * UI action.
 * 
 * @returns {State}
 * New UI state according to action.
 */
// export const uiReducer: ActionReducer<State, UIActions> = (state: State = initialState, action: UIActions) =>
export function uiReducer(state: State = initialState, action: UIActions)
{
    switch (action.type)
    {
        case UIActionsTypes.StartLoading:
            return { ...state, isLoading: true };

        case UIActionsTypes.StopLoading:
            return { ...state, isLoading: false };

        default:
            return { ...state };
    }
}

/**
 * Returns the value of 'isLoading' from the given UI state.
 * 
 * @param {State} state
 * UI State.
 * 
 * @returns {boolean}
 * Value of 'isLoading'.
 */
export const getIsLoading = (state: State) => state.isLoading;