import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../core/material.module';
import { SourceCodeEntryComponent } from './source-code-entry.component';
import { SourceCodeEntry } from '../source-code-entry.model';

describe('SourceCodeEntryComponent', () => {
    let component: SourceCodeEntryComponent;
    let fixture: ComponentFixture<SourceCodeEntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SourceCodeEntryComponent,
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
        fixture = TestBed.createComponent(SourceCodeEntryComponent);
        component = fixture.componentInstance;
        component.entry = new SourceCodeEntry({
            description: 'description',
            icon: '',
            id: '1',
            items: [],
            name: 'name',
            order: 1,
            svgIcon: ''
        });
        fixture.detectChanges();
    });

    it('should create the SourceCodeEntryComponent', () => {
        expect(component).not.toBeNull();
    });
});
