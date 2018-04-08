import { Component, OnInit, Input } from '@angular/core';

import Hobby from '../hobby.model';

@Component({
    selector: 'cv-resume-hobbies',
    templateUrl: './resume-hobbies.component.html',
    styleUrls: ['./resume-hobbies.component.scss']
})
export class ResumeHobbiesComponent
{
    @Input() hobbies: Hobby[] = [];
}
