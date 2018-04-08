import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../core/material.module';

import { SourceCodeComponent } from './source-code.component';
import { SourceCodeEntryComponent } from './source-code-entry/source-code-entry.component';

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
        SourceCodeComponent,
        SourceCodeEntryComponent,
    ],
})
export class SourceCodeModule { }
