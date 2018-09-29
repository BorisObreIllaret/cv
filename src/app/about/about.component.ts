import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { AboutEntry } from './about-entry.model';
import { AboutService } from './about.service';
import { HtmlHeaderService } from '../core/html-header.service';
import { UIService } from '../shared/ui.service';

import * as moment from 'moment';

@Component({
    selector: 'cv-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit
{
    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : A propos`;
    private readonly COMPONENT_DESCRIPTION = `Pour en apprendre un peu plus sur moi.`;
    private readonly COMPONENT_KEYWORDS = `à propos, about, boris, obre-illaret`;
    
    yearsOld: string = '';
    isLoading$: Observable<boolean>;
    aboutEntries$: Observable<AboutEntry[]>;
    
    constructor(private htmlHeader: HtmlHeaderService,
                private aboutService: AboutService,
                private uiService: UIService) { }

    ngOnInit(): void
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
        
        let today = moment();
        let birthday = moment('1976-10-19', 'YYYY-MM-DD');
        let duration = moment.duration(today.diff(birthday));
        this.yearsOld = `${duration.years()} ans et ${duration.months()} mois`;

        this.isLoading$ = this.uiService.storeSelectIsLoading();
        this.aboutEntries$ = this.aboutService.selectAboutEntriesFromStore;
    }
}
