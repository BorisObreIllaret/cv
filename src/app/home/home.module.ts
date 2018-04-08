import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { PipeModule } from '../pipes/pipe.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeSkillComponent } from './home-skill/home-skill.component';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        PipeModule,
        RouterModule,
    ],

    declarations:
    [
        HomeComponent,
        HomeCardComponent,
        HomeSkillComponent
    ],
})
export class HomeModule { }
