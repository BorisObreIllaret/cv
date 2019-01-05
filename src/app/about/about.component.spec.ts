import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../core/app.reducers';
import { MaterialModule } from '../core/material.module';
import { HtmlHeaderService } from '../core/html-header.service';

import { AboutComponent } from './about.component';
import { AboutEntryComponent } from './about-entry/about-entry.component';
import { PipeModule } from '../pipes/pipe.module';
import { UIService } from '../shared/ui.service';

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent,
                AboutEntryComponent,
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                PipeModule,
                RouterTestingModule.withRoutes([]),
                StoreModule.forRoot(reducers),
            ],
            providers: [
                HtmlHeaderService,
                Store,
                UIService,
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the AboutComponent', () => {
        expect(component).not.toBeNull();
    });
});
