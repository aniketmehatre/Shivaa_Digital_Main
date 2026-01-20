import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { SeoOptimizationComponent } from './seo-optimization/seo-optimization.component';
import { PpcManagementComponent } from './ppc-management/ppc-management.component';
import { AndroidAppDevelopmentComponent } from './android-app-development/android-app-development.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocialMediaMarketingComponent,
    WebsiteDevelopmentComponent,
    SeoOptimizationComponent,
    PpcManagementComponent,
    AndroidAppDevelopmentComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule
  ]
})
export class ServicesModule { }
