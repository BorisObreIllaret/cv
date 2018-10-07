import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { PipeModule } from '../pipes/pipe.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeSkillComponent } from './home-skill/home-skill.component';
import { skillReducer } from './skill.reducer';
import { SkillEffects } from './skill.effects';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        PipeModule,
        RouterModule,
        StoreModule.forFeature('skill', skillReducer),
        EffectsModule.forFeature([SkillEffects])
    ],

    declarations:
    [
        HomeComponent,
        HomeCardComponent,
        HomeSkillComponent
    ],
})
export class HomeModule { }
