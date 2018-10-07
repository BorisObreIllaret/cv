import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import Degree from './degree.model';
import Job from './job.model';
import Hobby from './hobby.model';

import { HtmlHeaderService } from '../core/html-header.service';
import { UIService } from '../shared/ui.service';
import { AppState } from '../core/app.reducers';
import { selectAllDegrees, selectAllJobs, selectAllHobbies } from './resume.selectors';

@Component({
    selector: 'cv-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : CV`;
    private readonly COMPONENT_DESCRIPTION = `Curriculum vitæ (CV) de Boris Obre-Illaret : expérience professionnelle, formation initiale.`;
    private readonly COMPONENT_KEYWORDS = `cv, resume, curriculum, vitæ, vitae, boris, obre-illaret, expérience, professionnelle, formation, initiale`;
    
    isLoading$: Observable<boolean>;
    degrees$: Observable<Degree[]>
    hobbies$: Observable<Hobby[]>;
    jobs$: Observable<Job[]>;
    
    constructor(private htmlHeader: HtmlHeaderService,
                private store: Store<AppState>,
                private uiService: UIService) { }

    ngOnInit()
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
        
        this.isLoading$ = this.uiService.storeSelectIsLoading();

        this.degrees$ = this.store.pipe(select(selectAllDegrees));
        this.hobbies$ = this.store.pipe(select(selectAllHobbies))
        this.jobs$ = this.store.pipe(select(selectAllJobs));
    }
}
