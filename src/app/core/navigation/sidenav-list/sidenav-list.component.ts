import { Observable } from 'rxjs';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { NavigationService } from '../navigation.service';
import { NavigationItem } from '../navigation-item.model';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';

@Component({
    selector: 'cv-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit
{
    @Input() navigationItems: NavigationItem[];
    @Output() sidenavClose = new EventEmitter();

    navigationItems$: Observable<NavigationItem[]>;
  
    constructor(private navigationService: NavigationService) { }

    ngOnInit(): void
    {
        this.navigationService.fetchNavigationItems();
        this.navigationItems$ = this.navigationService.subscribeToNavigationItems();
    }
}