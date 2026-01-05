import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeYourOwnBossComponent } from './be-your-own-boss.component';

describe('BeYourOwnBossComponent', () => {
  let component: BeYourOwnBossComponent;
  let fixture: ComponentFixture<BeYourOwnBossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeYourOwnBossComponent]
    });
    fixture = TestBed.createComponent(BeYourOwnBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
