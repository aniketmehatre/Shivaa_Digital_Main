import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientDiaryComponent } from './client-diary/client-diary.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule as AppFormsModule } from '../forms/forms.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ClientDiaryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    AppFormsModule,
    FeaturesRoutingModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ClientDiaryComponent,
    ContactComponent
  ]
})
export class FeaturesModule { }
