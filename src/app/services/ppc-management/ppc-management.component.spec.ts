import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcManagementComponent } from './ppc-management.component';

describe('PpcManagementComponent', () => {
  let component: PpcManagementComponent;
  let fixture: ComponentFixture<PpcManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpcManagementComponent]
    });
    fixture = TestBed.createComponent(PpcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
