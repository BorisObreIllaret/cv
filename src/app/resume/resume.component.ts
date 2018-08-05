import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import Degree from './degree.model';
import Job from './job.model';
import Hobby from './hobby.model';

import { HtmlHeaderService } from '../core/html-header.service';
import { ResumeService } from './resume.service';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    private readonly COMPONENT_TITLE = `Boris Obre-Illaret : CV`;
    private readonly COMPONENT_DESCRIPTION = `Curriculum vitæ (CV) de Boris Obre-Illaret : expérience profressionnelle, formation initiale.`;
    private readonly COMPONENT_KEYWORDS = `cv, resume, curriculum, vitæ, vitae, boris, obre-illaret, expérience, professionnelle, formation, initiale`;
    
    isLoading$: Observable<boolean>;
    degrees$: Observable<Degree[]>
    jobs$: Observable<Job[]>;
    hobbies$: Observable<Hobby[]>;
    
    constructor(private htmlHeader: HtmlHeaderService,
                private resumeService: ResumeService,
                private uiService: UIService) { }

    ngOnInit()
    {
        this.htmlHeader.setHeaderTags(this.COMPONENT_TITLE, this.COMPONENT_DESCRIPTION, this.COMPONENT_KEYWORDS);
        
        this.isLoading$ = this.uiService.storeSelectIsLoading();
        this.degrees$ = this.resumeService.selectDegreesFromStore;
        this.jobs$ = this.resumeService.selectJobsFromStore;
        this.hobbies$ = this.resumeService.selectHobbiesFromStore;
        this.resumeService.getDegreesFromDb();
        this.resumeService.getHobbiesFromDb();
        this.resumeService.getJobsFromDb();

        // this.isLoading$ = this.uiService.storeSelectIsLoading();
        // this.degrees$ = this.resumeService.getDegreesSnapshotChanges();
        // this.jobs$ = this.resumeService.getJobsSnapshotChanges();
        // this.hobbies$ = this.resumeService.getHobbiesSnapshotChanges();
    }
}
