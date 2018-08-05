import { Component, OnInit } from '@angular/core';

import { HtmlHeaderService } from '../core/html-header.service';

@Component({
    selector: 'cv-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit
{
    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : Page non trouvée`;
    private readonly COMPONENT_DESCRIPTION = `Cette page n'existe pas.`;
    private readonly COMPONENT_KEYWORDS = `page, non, trouvée, not, found, erreur, error, boris, obre-illaret`;
    
    constructor(private htmlHeader: HtmlHeaderService) { }

    ngOnInit(): void
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
    }
}
