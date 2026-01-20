import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openInquiryDialog(): void {
    this.dialog.open(ServiceFormComponent, {
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      panelClass: 'centered-service-dialog',
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      backdropClass: 'dialog-backdrop'
    });
  }
}
