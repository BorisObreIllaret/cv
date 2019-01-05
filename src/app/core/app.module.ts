import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from './material.module';
import { PipeModule } from '../pipes/pipe.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { AboutService } from '../about/about.service';
import { ContactService } from '../contact/contact.service';
import { HtmlHeaderService } from './html-header.service';
import { NavigationService } from './navigation/navigation.service';
import { ResumeService } from '../resume/resume.service';
import { SkillService } from '../home/skill.service';
import { SourceCodeService } from '../source-code/source-code.service';
import { UIService } from '../shared/ui.service';

@NgModule({
    declarations:
    [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
    ],

    imports:
    [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        HomeModule,
        HttpClientModule,
        MaterialModule,
        PipeModule.forRoot(),
        ReactiveFormsModule,
        RecaptchaModule.forRoot(),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
    ],

    providers:
    [
        AboutService,
        ContactService,
        HtmlHeaderService,
        NavigationService,
        ResumeService,
        SkillService,
        SourceCodeService,
        UIService,
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: {
                siteKey: '6Lf150sUAAAAAEIbckCGK09lstFuOhW8XT9XOimR',
                theme: 'light',
                type: 'image',
                size: 'normal'  } as RecaptchaSettings
        },
        {
            provide: RECAPTCHA_LANGUAGE,
            useValue: 'fr',
        }
    ],

    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule { }
