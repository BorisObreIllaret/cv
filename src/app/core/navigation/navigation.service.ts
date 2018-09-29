import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import * as fromRoot from '../app.reducers';
import * as navigationActions from './navigation.actions';
import { Store } from '@ngrx/store';
import { NavigationActionTypes } from './navigation.actions';

import { NavigationItem } from './navigation-item.model';

/**
 * Provides methods for managing navigation.
 * 
 * @description
 * The navigation service is the central hub for handling navigation.
 * The navigation state is managed through NgRx store.
 * When the active route changes then the navigation state is updated accordingly.
 * `fetchNavigationItems` puts navigation items to NgRx store.
 * `subscribeToNavigationItems` allows to track any change of state of navigation items.
 */
@Injectable({
    providedIn: 'root'
})
export class NavigationService implements OnDestroy
{
    private readonly navItems: NavigationItem[] = [
        { name: 'home', icon: 'home', label: 'ACCUEIL', hint: 'Page d\'accueil', routerLink: '/', isActive: true },
        { name: 'resume', icon: 'description', label: 'CV', hint: 'Mon CV', routerLink: '/resume', isActive: false },
        { name: 'contact', icon: 'contact_mail', label: 'CONTACT', hint: 'Me contacter', routerLink: '/contact', isActive: false },
        { name: 'source', icon: 'code', label: 'CODE SOURCE', hint: 'Code source de ce site', routerLink: '/source', isActive: false },
        { name: 'about', icon: 'help', label: 'A PROPOS', hint: 'A propos de ce site', routerLink: '/about', isActive: false },
    ];

    private routerSubscription: Subscription;

    constructor(private store: Store<fromRoot.State>,
                private router: Router)
    {
        // Subscribe to router events, keep only 'NavigationEnd' event and call method 'onRouterNavigationEnd' when this event is triggered
        this.routerSubscription = this.router.events
            .pipe(filter((event: Event) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this.onRouterNavigationEnd(event));
    }

    ngOnDestroy(): void
    {
        this.routerSubscription.unsubscribe();
    }

    subscribeToSideNavState(): Observable<boolean>
    {
        return this.store.select(fromRoot.getShowSideNav);
    }

    closeSideNav(): void
    {
        this.store.dispatch(new navigationActions.CloseSideNav());
    }

    openSideNav(): void
    {
        this.store.dispatch(new navigationActions.OpenSideNav());
    }

    /**
     * Gets the navigation item list and put it to the NgRx store.
     */
    fetchNavigationItems(): void
    {
        this.store.dispatch(new navigationActions.SetNavigationItems([ ...this.navItems]));
    }

    /**
     * Gets an obervable of the navigation item list provided by the NgRx store. 
     * 
     * @returns {Observable<NavigationItem[]>}
     *  Observable of the navigation item list.
     */
    subscribeToNavigationItems(): Observable<NavigationItem[]>
    {
        return this.store.select(fromRoot.getNavigationItems);
    }

    /**
     * Get url of successfully navigation and look for the corresponding navigation item.
     * Then 'isActive' property is set to true for the found item and set to false for all the others.
     * 
     * @param {NavigationEnd} event
     *  Event from router triggered when a navigation ends successfully.
     */
    private onRouterNavigationEnd(event: NavigationEnd): void
    {
        if (this.navItems.some(ni => event.url.startsWith(ni.routerLink)))
        {
            const navigationItemName = this.navItems.find(ni => event.url === ni.routerLink).name;
            this.store.dispatch(new navigationActions.ActivateNavigationItem(navigationItemName));
        }

        else
        {
            this.store.dispatch(new navigationActions.DeactivateAllNavigationItems());
        }
    }
}