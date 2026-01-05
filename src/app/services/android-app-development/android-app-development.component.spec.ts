import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppDevelopmentComponent } from './android-app-development.component';

describe('AndroidAppDevelopmentComponent', () => {
  let component: AndroidAppDevelopmentComponent;
  let fixture: ComponentFixture<AndroidAppDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidAppDevelopmentComponent]
    });
    fixture = TestBed.createComponent(AndroidAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
