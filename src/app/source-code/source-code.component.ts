import { Subscription, Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { SourceCodeEntry } from './source-code-entry.model';
import { SourceCodeService } from './source-code.service';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit
{
    isLoading$: Observable<boolean>;
    sourceCodeEntries$: Observable<SourceCodeEntry[]>;

    constructor(private sourceCodeService: SourceCodeService,
                private uiService: UIService) { }

    ngOnInit(): void
    {
        this.isLoading$ = this.uiService.storeSelectIsLoading();
        this.sourceCodeEntries$ = this.sourceCodeService.selectSourceCodeEntriesFromStore;
        this.sourceCodeService.getSourceCodeEntriesFromDb();
    }
}
