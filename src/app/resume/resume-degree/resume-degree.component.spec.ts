import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../core/material.module';
import { ResumeDegreeComponent } from './resume-degree.component';
import Degree from '../degree.model';

describe('ResumeDegreeComponent', () => {
    let component: ResumeDegreeComponent;
    let fixture: ComponentFixture<ResumeDegreeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                ResumeDegreeComponent
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeDegreeComponent);
        component = fixture.componentInstance;
        component.degree = new Degree({
            grade: 'grade',
            id: '1',
            level: 'level',
            location: 'location',
            order: 1,
            subject: 'subject',
            university: 'university',
        });
        fixture.detectChanges();
    });

    it('should create the ResumeDegreeComponent', () => {
        expect(component).not.toBeNull();
    });
});
