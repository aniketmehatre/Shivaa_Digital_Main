import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FaqComponent } from './faq/faq.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    DisclaimerComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ]
})
export class FooterModule { }
