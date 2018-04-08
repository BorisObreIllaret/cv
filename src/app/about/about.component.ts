import { Subscription, Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AboutEntry } from './about-entry.model';
import { AboutService } from './about.service';
import { UIService } from '../shared/ui.service';

import * as moment from 'moment';

@Component({
    selector: 'cv-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit
{
    yearsOld: string = '';
    isLoading$: Observable<boolean>;
    aboutEntries$: Observable<AboutEntry[]>;
    
    constructor(private aboutService: AboutService,
                private uiService: UIService) { }

    ngOnInit(): void
    {
        let today = moment();
        let birthday = moment('1976-10-19', 'YYYY-MM-DD');
        let duration = moment.duration(today.diff(birthday));
        this.yearsOld = `${duration.years()} ans et ${duration.months()} mois`;

        this.isLoading$ = this.uiService.storeSelectIsLoading();
        this.aboutEntries$ = this.aboutService.selectAboutEntriesFromStore;
        this.aboutService.getAboutEntriesFromDb();
    }
}
