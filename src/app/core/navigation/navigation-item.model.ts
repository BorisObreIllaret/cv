/**
 * Model of navigation item.
 */
export interface NavigationItem
{
    /**
     * Name (identifier) of the navigation item.
     */
    name: string,

    /**
     * Material icon associated to the navigation item.
     */
    icon?: string,

    /**
     * Displayed label of the navigation item.
     */
    label: string,

    /**
     * Hint associated to the navigation item. Is optional.
     */
    hint?: string,

    /**
     * Router link activated by the navigation item.
     */
    routerLink: string,

    /**
     * Is true when the router current url corresponds to the navigation item router link.
     */
    isActive: boolean,
}