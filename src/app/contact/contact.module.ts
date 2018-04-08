import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { RouterModule } from '@angular/router';

import { RecaptchaModule } from 'ng-recaptcha';

import { ContactComponent } from './contact.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@NgModule({
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        RecaptchaModule,
        RouterModule,
    ],

    declarations:
    [
        ContactComponent,
        ContactDialogComponent,
        ContactDialogComponent,
    ],

    entryComponents:
    [
        ContactDialogComponent,
        ContactDialogComponent,
    ]
})
export class ContactModule { }