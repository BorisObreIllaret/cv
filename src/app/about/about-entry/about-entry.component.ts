import { Component, Input } from '@angular/core';
import { AboutEntry } from '../about-entry.model';

@Component({
    selector: 'cv-about-entry',
    templateUrl: './about-entry.component.html',
    styleUrls: ['./about-entry.component.scss']
})
export class AboutEntryComponent
{
    @Input() entry: AboutEntry;

    constructor() { }
}
