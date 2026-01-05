import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopItCoursesComponent } from './top-it-courses/top-it-courses.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { BeYourOwnBossComponent } from './be-your-own-boss/be-your-own-boss.component';
import { DigitalTeachersComponent } from './digital-teachers/digital-teachers.component';
import { KidsLearnComponent } from './kids-learn/kids-learn.component';

const routes: Routes = [
  { path: 'top-it-courses', component: TopItCoursesComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'be-your-own-boss', component: BeYourOwnBossComponent },
  { path: 'digital-teachers', component: DigitalTeachersComponent },
  { path: 'kids-learn', component: KidsLearnComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
