import { Component, OnInit, Input } from '@angular/core';

import Degree from '../degree.model';

import * as moment from 'moment';

@Component({
    selector: 'cv-resume-degree',
    templateUrl: './resume-degree.component.html',
    styleUrls: ['./resume-degree.component.scss']
})
export class ResumeDegreeComponent implements OnInit
{
    @Input() degree: Degree;

    degreeDuration: string = '';
    
    constructor() { }

    ngOnInit()
    {
        const fromMoment = (this.degree.startDate) ? moment(this.degree.startDate.toDate()) : moment();
        const degreeStart = (this.degree.startDate) ? fromMoment.format('YYYY') : `aujourd'hui`;

        const toMoment = (this.degree.endDate) ? moment(this.degree.endDate.toDate()) : moment();
        const degreeEnd = (this.degree.endDate) ? toMoment.format('YYYY') : `aujourd'hui`;

        this.degreeDuration = `${degreeStart} - ${degreeEnd}`;
    }
}
