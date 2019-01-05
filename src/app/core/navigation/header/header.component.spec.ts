import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../../app.reducers';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material.module';
import { NavigationService } from '../navigation.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                HeaderComponent
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                MaterialModule,
                RouterTestingModule.withRoutes([]),
                StoreModule.forRoot(reducers),
            ],
            providers: [
                NavigationService,
                Store,
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the HeaderComponent', () => {
        expect(component).not.toBeNull();
    });

    it('should have a nav', () => {
        const nav = fixture.debugElement.nativeElement.querySelector('nav');
        expect(nav).not.toBeNull();
    });
});
