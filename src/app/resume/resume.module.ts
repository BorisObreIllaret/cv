import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';
import { ResumeJobComponent } from './resume-job/resume-job.component';
import { ResumeDegreeComponent } from './resume-degree/resume-degree.component';
import { ResumeHobbiesComponent } from './resume-hobbies/resume-hobbies.component';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
    ],

    declarations:
    [
        ResumeComponent,
        ResumeJobComponent,
        ResumeDegreeComponent,
        ResumeHobbiesComponent,
    ],
})
export class ResumeModule { }
