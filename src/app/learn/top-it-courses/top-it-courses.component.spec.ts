import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItCoursesComponent } from './top-it-courses.component';

describe('TopItCoursesComponent', () => {
  let component: TopItCoursesComponent;
  let fixture: ComponentFixture<TopItCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopItCoursesComponent]
    });
    fixture = TestBed.createComponent(TopItCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
