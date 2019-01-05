import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { StoreModule } from '@ngrx/store';
import { ResumeComponent } from './resume.component';
import { ResumeDegreeComponent } from './resume-degree/resume-degree.component';
import { ResumeHobbiesComponent } from './resume-hobbies/resume-hobbies.component';
import { ResumeJobComponent } from './resume-job/resume-job.component';
import { reducers } from '../core/app.reducers';

describe('ResumeComponent', () => {
    let component: ResumeComponent;
    let fixture: ComponentFixture<ResumeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResumeComponent,
                ResumeJobComponent,
                ResumeDegreeComponent,
                ResumeHobbiesComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                StoreModule.forRoot(reducers),
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the ResumeComponent', () => {
        expect(component).not.toBeNull();
    });
});
