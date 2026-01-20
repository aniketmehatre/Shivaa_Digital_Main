import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
