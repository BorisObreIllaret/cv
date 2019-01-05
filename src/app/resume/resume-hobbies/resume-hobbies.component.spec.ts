import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../core/material.module';
import Hobby from '../hobby.model';
import { ResumeHobbiesComponent } from './resume-hobbies.component';

describe('ResumeHobbiesComponent', () => {
    let component: ResumeHobbiesComponent;
    let fixture: ComponentFixture<ResumeHobbiesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResumeHobbiesComponent
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
        fixture = TestBed.createComponent(ResumeHobbiesComponent);
        component = fixture.componentInstance;
        component.hobbies = [new Hobby({
            description: 'description',
            icon: '',
            id: '1',
            name: 'name',
            order: 1,
            svgIcon: '',
        })];
        fixture.detectChanges();
    });

    it('should create the ResumeHobbiesComponent', () => {
        expect(component).not.toBeNull();
    });
});
