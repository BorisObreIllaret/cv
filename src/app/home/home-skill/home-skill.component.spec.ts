import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillComponent } from './home-skill.component';

describe('HomeSkillComponent', () => {
  let component: HomeSkillComponent;
  let fixture: ComponentFixture<HomeSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
