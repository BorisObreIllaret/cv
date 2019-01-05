import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AboutEntryComponent } from './about-entry.component';
import { MaterialModule } from '../../core/material.module';
import { AboutEntry } from '../about-entry.model';

describe('AboutEntryComponent', () => {
    let component: AboutEntryComponent;
    let fixture: ComponentFixture<AboutEntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutEntryComponent
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
        fixture = TestBed.createComponent(AboutEntryComponent);
        component = fixture.componentInstance;
        component.entry = new AboutEntry({
            description: 'description',
            icon: 'person',
            id: '1',
            imgAlt: 'imgAlt',
            imgSrc: '',
            order: 1,
            svgIcon: null,
            title: 'title',
        });
        fixture.detectChanges();
    });

    it('should create the AboutEntryComponent', () => {
        expect(component).not.toBeNull();
    });
});
