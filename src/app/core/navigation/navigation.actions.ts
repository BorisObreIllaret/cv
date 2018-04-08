import { Action } from '@ngrx/store';
import { NavigationItem } from './navigation-item.model';

/**
 * Enumeration of all actions available for navigation.
 */
export enum NavigationActionTypes
{
    CloseSideNav = '[Navigation] Close SideNav',
    OpenSideNav = '[Navigation] Open SideNav',
    ActivateNavigationItem = '[Navigation] Activate Navigation Item',
    DeactivateAllNavigationItems = '[Navigation] Deactivate All Navigation Items',
    SetNavigationItems = '[Navigation] Set Navigation Items',
}

/**
 * Class for 'CloseSideNav' action.
 */
export class CloseSideNav implements Action
{
    readonly type = NavigationActionTypes.CloseSideNav;
}

/**
 * Class for 'OpenSideNav' action.
 */
export class OpenSideNav implements Action
{
    readonly type = NavigationActionTypes.OpenSideNav;
}

/**
 * Class for 'ActivateNavigationItem' action.
 */
export class ActivateNavigationItem implements Action
{
    readonly type = NavigationActionTypes.ActivateNavigationItem;

    /**
     * @constructor
     * 
     * @param {string} payload
     *  Name of the navigation item to modify. 
     */
    constructor(public payload: string) { }
}

/**
 * Class for 'DeactivateAllNavigationItems' action.
 */
export class DeactivateAllNavigationItems implements Action
{
    readonly type = NavigationActionTypes.DeactivateAllNavigationItems;
}

/**
 * Class for 'SetNavigationItems' action.
 */
export class SetNavigationItems implements Action
{
    readonly type = NavigationActionTypes.SetNavigationItems;

    /**
     * @constructor
     * 
     * @param {NavigationItem[]} payload
     *  List of navigation items.
     */
    constructor(public payload: NavigationItem[]) { }
}

/**
 * Type of all available navigation actions.
 */
export type NavigationActions = CloseSideNav | OpenSideNav | ActivateNavigationItem | DeactivateAllNavigationItems | SetNavigationItems;