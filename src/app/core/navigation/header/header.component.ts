import { Observable } from 'rxjs';

import { Component, Output, EventEmitter, ViewChild  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { NavigationService } from '../navigation.service';
import { NavigationItem } from '../navigation-item.model';

@Component({
    selector: 'cv-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
    @Output() sidenavToggle = new EventEmitter<void>();
    @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

    navigationItems$: Observable<NavigationItem[]>;

    constructor(public navigationService: NavigationService) { }

    ngOnInit(): void
    {
        this.navigationService.fetchNavigationItems();
        this.navigationItems$ = this.navigationService.subscribeToNavigationItems();
    }

    onToggleSidenav()
    {
        this.sidenavToggle.emit();
    }

    onMenuTrigger()
    {
        this.trigger.openMenu();
    }
}
