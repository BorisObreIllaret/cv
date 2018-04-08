import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDegreeComponent } from './resume-degree.component';

describe('ResumeDegreeComponent', () => {
  let component: ResumeDegreeComponent;
  let fixture: ComponentFixture<ResumeDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
