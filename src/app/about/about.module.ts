import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../core/material.module';

import { AboutComponent } from './about.component';
import { AboutEntryComponent } from './about-entry/about-entry.component';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
    ],

    declarations: [
        AboutComponent,
        AboutEntryComponent
    ],
})
export class AboutModule { }
