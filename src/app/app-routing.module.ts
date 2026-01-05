import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesRoutingModule } from './features/features-routing.module';
import { ServicesRoutingModule } from './services/services-routing.module';
import { FormsRoutingModule } from './forms/forms-routing.module';
import { LearnRoutingModule } from './learn/learn-routing.module';
import { FooterRoutingModule } from './footer/footer-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'learn', loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule) },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
