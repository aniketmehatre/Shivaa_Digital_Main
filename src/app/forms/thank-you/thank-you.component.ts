import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type ThankYouDialogData = {
  name?: string;
  course?: string;
};

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  readonly phoneHref = 'tel:+917020070178';
  readonly whatsappHref = 'https://wa.me/917020070178';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ThankYouDialogData) { }
}
