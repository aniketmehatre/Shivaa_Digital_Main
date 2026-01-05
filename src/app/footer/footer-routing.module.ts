import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
