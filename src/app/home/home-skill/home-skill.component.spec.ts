import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSkillComponent } from './home-skill.component';
import { MaterialModule } from '../../core/material.module';
import { PipeModule } from '../../pipes/pipe.module';
import { Skill } from '../skill.model';

describe('HomeSkillComponent', () => {
    let component: HomeSkillComponent;
    let fixture: ComponentFixture<HomeSkillComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeSkillComponent
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                PipeModule,
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeSkillComponent);
        component = fixture.componentInstance;
        component.skill = new Skill({
            chips: ['1', '2', '3'],
            competence: 'competence',
            experience: 'experience',
            hobbies: ['1', '2', '3'],
            id: '1',
            order: 1,
            skills: ['1', '2', '3'],
        });
        fixture.detectChanges();
    });

    it('should create the HomeSkillComponent', () => {
        expect(component).not.toBeNull();
    });
});
