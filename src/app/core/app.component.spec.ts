import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { StoreModule, Store } from '@ngrx/store';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { reducers } from './app.reducers';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FooterComponent,
                HeaderComponent,
            ],
            imports: [
                BrowserModule,
                FlexLayoutModule,
                HttpClientModule,
                MaterialModule,
                RouterTestingModule.withRoutes([]),
                StoreModule.forRoot(reducers),
            ],
            providers: [
                MatIconRegistry,
                Store,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the AppComponent', () => {
        expect(component).not.toBeNull();
    });

    it('should have a header', () => {
        const header = fixture.debugElement.nativeElement.querySelector('header');
        expect(header).not.toBeNull();
    });

    it('should have a main', () => {
        const main = fixture.debugElement.nativeElement.querySelector('main');
        expect(main).not.toBeNull();
    });

    it('should have a footer', () => {
        const footer = fixture.debugElement.nativeElement.querySelector('footer');
        expect(footer).not.toBeNull();
    });

    it('should have a router outlet', () => {
        const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
        expect(routerOutlet).not.toBeNull();
    });
});
