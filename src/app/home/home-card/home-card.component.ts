import { Component, Input } from '@angular/core';

@Component({
    selector: 'cv-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent
{
    @Input() icon: string;
    @Input() imgAlt: string;
    @Input() imgSrc: string;
    @Input() svgIcon: string;
    @Input() title: string;
}
