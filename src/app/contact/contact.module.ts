import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { RouterModule, Routes } from '@angular/router';

import { RecaptchaModule } from 'ng-recaptcha';

import { ContactComponent } from './contact.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RecaptchaModule,
        ContactRoutingModule,
    ],

    declarations:
    [
        ContactComponent,
        ContactDialogComponent,
    ],

    entryComponents:
    [
        ContactDialogComponent,
    ]
})
export class ContactModule { }