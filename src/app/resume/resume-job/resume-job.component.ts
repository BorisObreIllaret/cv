import { Observable } from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';

import { ResumeService } from '../resume.service';
import Assignment from '../assignment.model';
import Job from '../job.model';

import * as moment from 'moment';

@Component({
    selector: 'cv-resume-job',
    templateUrl: './resume-job.component.html',
    styleUrls: ['./resume-job.component.scss']
})
export class ResumeJobComponent implements OnInit
{
    @Input() job: Job;
    
    jobDuration: string = '';
    assignments$: Observable<Assignment[]>;

    constructor(private jobService: ResumeService) {}

    ngOnInit(): void
    {
        moment.locale('fr');
        const fromMoment = (this.job.startDate) ? moment(this.job.startDate.toDate()) : moment();
        const jobStart = (this.job.startDate) ? `${fromMoment.format('MMMM')} ${fromMoment.format('YYYY')}` : `aujourd'hui`;

        const toMoment = (this.job.endDate) ? moment(this.job.endDate.toDate()) : moment();
        const jobEnd = (this.job.endDate) ? `${toMoment.format('MMMM')} ${toMoment.format('YYYY')}` : `aujourd'hui`;

        const durationMoment = moment.duration(toMoment.diff(fromMoment));

        switch (durationMoment.years())
        {
            case 0: 
                this.jobDuration = `${jobStart} - ${jobEnd} (${durationMoment.months()} mois)`;
                break;
            
            case 1:
                this.jobDuration = `${jobStart} - ${jobEnd} (1 an et ${durationMoment.months()} mois)`;
                break;

            default:
                this.jobDuration = `${jobStart} - ${jobEnd} (${durationMoment.years()} ans et ${durationMoment.months()} mois)`;
                break;
        }

        // this.assignments$ = this.jobService.storeSelectAssignments();
        // this.jobService.getAssignmentsFromDb(this.job.id);

        this.assignments$ = this.jobService.getAssignmentsSnapshotChanges(this.job.id);
    }
}
