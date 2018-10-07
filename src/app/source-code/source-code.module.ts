import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../core/material.module';

import { SourceCodeComponent } from './source-code.component';
import { SourceCodeEntryComponent } from './source-code-entry/source-code-entry.component';
import { sourceCodeReducer } from './source-code.reducer';
import { SourceCodeEffects } from './source-code.effects';
import { SourceCodeRoutingModule } from './source-code-routing.module';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
        SourceCodeRoutingModule,
        StoreModule.forFeature('sourceCode', sourceCodeReducer),
        EffectsModule.forFeature([SourceCodeEffects])
    ],

    declarations:
    [
        SourceCodeComponent,
        SourceCodeEntryComponent,
    ],
})
export class SourceCodeModule { }
