import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { HtmlHeaderService } from '../core/html-header.service';
import { SourceCodeEntry } from './source-code-entry.model';
import { UIService } from '../shared/ui.service';
import { AppState } from '../core/app.reducers';
import { selectAllSourceCodeEntries } from './source-code.selectors';

@Component({
    selector: 'cv-source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit
{
    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : Code source`;
    private readonly COMPONENT_DESCRIPTION = `Retrouvez le code source de ce site.`;
    private readonly COMPONENT_KEYWORDS = `code, source, boris, obre-illaret, github, angular, visual, studio, typescript, ts, javascript, js, node, node.js, npm, material, design`;
    
    isLoading$: Observable<boolean>;
    sourceCodeEntries$: Observable<SourceCodeEntry[]>;

    constructor(private htmlHeader: HtmlHeaderService,
        private store: Store<AppState>,
        private uiService: UIService) { }

    ngOnInit(): void
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
        
        this.isLoading$ = this.uiService.storeSelectIsLoading();

        this.sourceCodeEntries$ = this.store.pipe(select(selectAllSourceCodeEntries));
    }
}
