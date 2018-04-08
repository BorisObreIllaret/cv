import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeEntryComponent } from './source-code-entry.component';

describe('SourceCodeEntryComponent', () => {
  let component: SourceCodeEntryComponent;
  let fixture: ComponentFixture<SourceCodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
