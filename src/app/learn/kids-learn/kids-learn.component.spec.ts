import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsLearnComponent } from './kids-learn.component';

describe('KidsLearnComponent', () => {
  let component: KidsLearnComponent;
  let fixture: ComponentFixture<KidsLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsLearnComponent]
    });
    fixture = TestBed.createComponent(KidsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
