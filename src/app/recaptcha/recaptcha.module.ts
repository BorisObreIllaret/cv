import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaDirective } from './recaptcha.directive';

@NgModule({
    imports:
    [
        CommonModule,
    ],

    declarations:
    [
        RecaptchaDirective,
    ]
})
export class RecaptchaModule { }