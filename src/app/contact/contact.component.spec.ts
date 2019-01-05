import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { HtmlHeaderService } from '../core/html-header.service';
import { MaterialModule } from '../core/material.module';
import { RecaptchaModule, RecaptchaLoaderService } from 'ng-recaptcha';
import { reducers } from '../core/app.reducers';
import { UIService } from '../shared/ui.service';

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                HttpClientModule,
                MaterialModule,
                RecaptchaModule,
                StoreModule.forRoot(reducers),
            ],
            providers: [
                ContactService,
                HtmlHeaderService,
                MatDialog,
                MatSnackBar,
                RecaptchaLoaderService,
                Store,
                UIService,
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the ContactComponent', () => {
        expect(component).not.toBeNull();
    });
});
