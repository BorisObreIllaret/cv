import { NavigationActions, NavigationActionTypes } from './navigation.actions';

import { NavigationItem } from './navigation-item.model';

/**
 * Interface for navigation state.
 */
export interface State
{
    showSideNav: boolean,
    navigationItems: NavigationItem[],
}

/**
 * Default values for navigation state.
 */
const initialState: State =
{
    showSideNav: false,
    navigationItems: [],
}

/**
 * Reducer for navigation.
 * 
 * @param {State} state
 * Current navigation state.
 * 
 * @param {NavigationActions} action
 * Navigation action.
 * 
 * @returns {State}
 * New navigation state according to action.
 */
export const navigationReducer = (state: State = initialState, action: NavigationActions): State =>
{
    /**
     * Set 'isActive' property to false for all navigation items.
     * 
     * @param {NavigationItem[]} navItems
     *  List of navigation items.
     */
    const desactivateAllNavigationItems = (navItems: NavigationItem[]): void =>
    {
        if (navItems.some(ni => ni.isActive === true))
        {
            navItems.filter(ni => ni.isActive === true).forEach(ni => ni.isActive = false);
        }
    }

    /**
     * Set 'isActive' property to true for the first found navigation item with given name.
     * 
     * @param {NavigationItem[]} navItems
     *  List of navigation items.
     * 
     * @param {string} name
     *  Name of the navigation item to modify.
     */
    const activateNavigationItem = (navItems: NavigationItem[], name: string): void =>
    {
        if (navItems.some(ni => ni.name === name))
        {
            navItems.find(ni => ni.name === name).isActive = true;
        }  
    }    
    
    switch (action.type)
    {
        case NavigationActionTypes.CloseSideNav:
            return { ...state, showSideNav: false };

        case NavigationActionTypes.OpenSideNav:
            return { ...state, showSideNav: true };

        case NavigationActionTypes.ActivateNavigationItem:
            {
                const navItems = [...state.navigationItems];
                desactivateAllNavigationItems(navItems);
                activateNavigationItem(navItems, action.payload);
                return { ...state, navigationItems: navItems };
            }

        case NavigationActionTypes.DeactivateAllNavigationItems:
            {
                const navItems = [...state.navigationItems];
                desactivateAllNavigationItems(navItems);
                return { ...state, navigationItems: navItems };
            }

        case NavigationActionTypes.SetNavigationItems:
            return { ...state, navigationItems: action.payload };

        default:
            return { ...state };
    } 
}

/**
 * Returns the value of 'showSideNav' from the given navigation state.
 * 
 * @param {State} state
 *  Navigation state.
 * 
 * @returns {boolean}
 *  Value of 'showSideNav'.
 */
export const getShowSideNav = (state: State): boolean => state.showSideNav;

/**
 * Return the value of 'navigationItems' from the given navigation state.
 * 
 * @param {State} state
 *  Navigation state.
 * 
 * @returns {NavigationItem[]}
 *  Value of 'navigationItems'
 */
export const getNavigationItems = (state: State): NavigationItem[] => state.navigationItems;