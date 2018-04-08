import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cv-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent
{
    @Input() icon: string = null;
    @Input() hint: string = '';
    @Input() routerLink: string | any[] = '/';
    @Input() isActive: boolean = false;
}