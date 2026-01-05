import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTeachersComponent } from './digital-teachers.component';

describe('DigitalTeachersComponent', () => {
  let component: DigitalTeachersComponent;
  let fixture: ComponentFixture<DigitalTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalTeachersComponent]
    });
    fixture = TestBed.createComponent(DigitalTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
