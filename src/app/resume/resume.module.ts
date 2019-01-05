import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ResumeComponent } from './resume.component';
import { ResumeJobComponent } from './resume-job/resume-job.component';
import { ResumeDegreeComponent } from './resume-degree/resume-degree.component';
import { ResumeHobbiesComponent } from './resume-hobbies/resume-hobbies.component';
import { assignmentReducer } from './assignment.reducer';
import { degreeReducer } from './degree.reducer';
import { hobbyReducer } from './hobby.reducer';
import { jobReducer } from './job.reducer';
import { ResumeEffects } from './resume.effects';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        ResumeRoutingModule,
        StoreModule.forFeature('assignment', assignmentReducer),
        StoreModule.forFeature('degree', degreeReducer),
        StoreModule.forFeature('hobby', hobbyReducer),
        StoreModule.forFeature('job', jobReducer),
        EffectsModule.forFeature([ResumeEffects]),
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
