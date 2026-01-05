import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { TopItCoursesComponent } from './top-it-courses/top-it-courses.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { BeYourOwnBossComponent } from './be-your-own-boss/be-your-own-boss.component';
import { DigitalTeachersComponent } from './digital-teachers/digital-teachers.component';
import { KidsLearnComponent } from './kids-learn/kids-learn.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule as AppFormsModule } from '../forms/forms.module';


@NgModule({
  declarations: [
    TopItCoursesComponent,
    DigitalMarketingComponent,
    BeYourOwnBossComponent,
    DigitalTeachersComponent,
    KidsLearnComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    AppFormsModule,
  ]
})
export class LearnModule { }
