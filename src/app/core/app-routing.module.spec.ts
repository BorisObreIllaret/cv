import { Route } from '@angular/router';
import { routes } from './app-routing.module';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

describe('app-routing', () => {
    const getRoute = (path: string): Route => routes.find(re => re.path === path);
    
    const checkRouteIsNotNull = (route: Route) => expect(route).not.toBeNull;

    const checkRouteHasLoadChildren = (route: Route, path: string) => expect(route.loadChildren).toContain(path);

    const checkRouteHasComponent = (route: Route, component) => expect(route.component).toBe(component);
    
    it('should contain a route for /about', () => {
        const path = 'about';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasLoadChildren(route, path);
    });

    it('should contain a route for /contact', () => {
        const path = 'contact';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasLoadChildren(route, path);
    });

    it('should contain a route for /resume', () => {
        const path = 'resume';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasLoadChildren(route, path);
    });

    it('should contain a route for /source', () => {
        const path = 'source';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasLoadChildren(route, path);
    });

    it('should contain a route for /', () => {
        const path = '';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasComponent(route, HomeComponent);
    });

    it('should contain a default route', () => {
        const path = '**';
        const route = getRoute(path);
        checkRouteIsNotNull(route);
        if (route) checkRouteHasComponent(route, NotFoundComponent);
    });
});