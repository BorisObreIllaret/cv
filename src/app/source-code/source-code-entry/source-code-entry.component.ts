import { Component, Input } from '@angular/core';
import { SourceCodeEntry } from '../source-code-entry.model';

@Component({
    selector: 'cv-source-code-entry',
    templateUrl: './source-code-entry.component.html',
    styleUrls: ['./source-code-entry.component.scss']
})
export class SourceCodeEntryComponent
{
    @Input() entry: SourceCodeEntry;

    constructor() { }
}
