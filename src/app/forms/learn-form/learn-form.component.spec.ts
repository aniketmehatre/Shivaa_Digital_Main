import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFormComponent } from './learn-form.component';

describe('LearnFormComponent', () => {
  let component: LearnFormComponent;
  let fixture: ComponentFixture<LearnFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnFormComponent]
    });
    fixture = TestBed.createComponent(LearnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
