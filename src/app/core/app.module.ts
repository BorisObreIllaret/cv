import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { AboutModule } from '../about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from '../contact/contact.module';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from './material.module';
import { PipeModule } from '../pipes/pipe.module';
import { ResumeModule } from '../resume/resume.module';
import { SourceCodeModule } from '../source-code/source-code.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SidenavItemComponent } from './navigation/sidenav-item/sidenav-item.component';

import { AboutService } from '../about/about.service';
import { ContactService } from '../contact/contact.service';
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
        SidenavListComponent,
        SidenavItemComponent,
    ],

    imports:
    [
        AboutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ContactModule,
        FlexLayoutModule,
        FormsModule,
        HomeModule,
        HttpClientModule,
        MaterialModule,
        PipeModule.forRoot(),
        ReactiveFormsModule,
        RecaptchaModule.forRoot(),
        ResumeModule,
        SourceCodeModule,
        StoreModule.forRoot(reducers),
    ],

    providers:
    [
        AboutService,
        ContactService,
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
