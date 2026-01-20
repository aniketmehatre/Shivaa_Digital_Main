import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingContactComponent } from './components/floating-contact/floating-contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { FormsModule as AppFormsModule } from '../forms/forms.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FloatingContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgFormsModule,
    AppFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FloatingContactComponent,
    NgFormsModule
  ]
})
export class SharedModule { }
