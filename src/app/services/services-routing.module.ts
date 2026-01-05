import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { SeoOptimizationComponent } from './seo-optimization/seo-optimization.component';
import { PpcManagementComponent } from './ppc-management/ppc-management.component';
import { AndroidAppDevelopmentComponent } from './android-app-development/android-app-development.component';

const routes: Routes = [
  { path: 'social-media-marketing', component: SocialMediaMarketingComponent },
  { path: 'website-development', component: WebsiteDevelopmentComponent },
  { path: 'seo-optimization', component: SeoOptimizationComponent },
  { path: 'ppc-management', component: PpcManagementComponent },
  { path: 'android-app-development', component: AndroidAppDevelopmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
