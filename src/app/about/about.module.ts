import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../core/material.module';

import { AboutComponent } from './about.component';
import { AboutEntryComponent } from './about-entry/about-entry.component';
import { aboutReducer } from './about.reducer';
import { AboutEffects } from './about.effects';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        AboutRoutingModule,
        StoreModule.forFeature('about', aboutReducer),
        EffectsModule.forFeature([AboutEffects]),
    ],

    declarations: [
        AboutComponent,
        AboutEntryComponent
    ],
})
export class AboutModule { }
