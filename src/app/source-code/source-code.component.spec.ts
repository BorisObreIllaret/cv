import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { SourceCodeComponent } from './source-code.component';
import { SourceCodeEntryComponent } from './source-code-entry/source-code-entry.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../core/app.reducers';

describe('SourceComponent', () => {
    let component: SourceCodeComponent;
    let fixture: ComponentFixture<SourceCodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SourceCodeComponent,
                SourceCodeEntryComponent,
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
        fixture = TestBed.createComponent(SourceCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the SourceComponent', () => {
        expect(component).toBeTruthy();
    });
});
