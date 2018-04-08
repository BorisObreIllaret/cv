import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEntryComponent } from './about-entry.component';

describe('AboutEntryComponent', () => {
  let component: AboutEntryComponent;
  let fixture: ComponentFixture<AboutEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
