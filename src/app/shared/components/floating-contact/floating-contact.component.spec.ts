import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FloatingContactComponent } from './floating-contact.component';

describe('FloatingContactComponent', () => {
  let component: FloatingContactComponent;
  let fixture: ComponentFixture<FloatingContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingContactComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FloatingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
