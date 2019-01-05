import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../core/app.reducers';
import { MaterialModule } from '../core/material.module';
import { HtmlHeaderService } from '../core/html-header.service';
import { HomeComponent } from './home.component';
import { HomeSkillComponent } from './home-skill/home-skill.component';
import { UIService } from '../shared/ui.service';
import { PipeModule } from '../pipes/pipe.module';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                HomeSkillComponent,
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
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the HomeComponent', () => {
        expect(component).not.toBeNull();
    });
});
