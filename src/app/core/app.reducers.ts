import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromNavigation from './navigation/navigation.reducer';
import * as fromUI from '../shared/ui.reducer';

/**
 * Interface for application state.
 */
export interface AppState
{
    navigation: fromNavigation.State,
    ui: fromUI.State,
}

/**
 * Application reducers.
 */
export const reducers: ActionReducerMap<AppState> =
{
    navigation: fromNavigation.navigationReducer,
    ui: fromUI.uiReducer,
}

export const getNavigationState = createFeatureSelector<fromNavigation.State>('navigation');
export const getShowSideNav = createSelector(getNavigationState, fromNavigation.getShowSideNav);
export const getNavigationItems = createSelector(getNavigationState, fromNavigation.getNavigationItems);

export const getUIState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUIState, fromUI.getIsLoading);