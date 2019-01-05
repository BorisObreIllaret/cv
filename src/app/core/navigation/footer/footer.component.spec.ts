import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../../app.reducers';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../../material.module';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FooterComponent,
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                RouterTestingModule.withRoutes([]),
                StoreModule.forRoot(reducers),
            ],
            providers: [
                Store,
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the FooterComponent', () => {
        expect(component).toBeTruthy();
    });
});
