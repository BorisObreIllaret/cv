import { Subscription, Observable } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';

import { RecaptchaComponent } from 'ng-recaptcha';

import Degree from './degree.model';
import Job from './job.model';
import Hobby from './hobby.model';

import { ResumeService } from './resume.service';
import { UIService } from '../shared/ui.service';

@Component({
    selector: 'cv-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    isLoading$: Observable<boolean>;
    degrees$: Observable<Degree[]>
    jobs$: Observable<Job[]>;
    hobbies$: Observable<Hobby[]>;
    
    constructor(private resumeService: ResumeService,
                private uiService: UIService) { }

    ngOnInit()
    {
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
