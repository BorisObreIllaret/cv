import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../core/material.module';
import { ResumeJobComponent } from './resume-job.component';
import Job from '../job.model';
import { reducers } from '../../core/app.reducers';

describe('ResumeJobComponent', () => {
    let component: ResumeJobComponent;
    let fixture: ComponentFixture<ResumeJobComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResumeJobComponent
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                StoreModule.forRoot(reducers),
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeJobComponent);
        component = fixture.componentInstance;
        component.job = new Job({
            achievements: [],
            company: 'company',
            companyDescription: 'companyDescription',
            companyLocation: 'companyLocation',
            description: 'description',
            id: '1',
            name: 'name',
            order: 1,            
        });
        fixture.detectChanges();
    });

    it('should create the ResumeJobComponent', () => {
        expect(component).not.toBeNull();
    });
});
