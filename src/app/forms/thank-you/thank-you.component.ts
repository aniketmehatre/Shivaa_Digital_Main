import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ThankYouComponent implements OnInit {
  readonly phoneHref = 'tel:+917020070178';
  readonly whatsappHref = 'https://wa.me/917020070178';
  name?: string;
  course?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: ThankYouDialogData
  ) { }

  ngOnInit(): void {
    const navState = this.router.getCurrentNavigation()?.extras?.state as
      | { name?: string; course?: string }
      | undefined;

    this.name = this.data?.name ?? navState?.name;
    this.course = this.data?.course ?? navState?.course;

    // Fallback to query params if provided
    if (!this.name || !this.course) {
      const qpName = this.route.snapshot.queryParamMap.get('name') ?? undefined;
      const qpCourse = this.route.snapshot.queryParamMap.get('course') ?? undefined;
      this.name = this.name ?? qpName;
      this.course = this.course ?? qpCourse;
    }

    this.trackConversion();
  }

  trackConversion() {
    try {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-714024328/oJ2_CNXf2PYaEIjLvNQC',
        event_callback: () => {
          console.log('Conversion Tracked');
        }
      });
    } catch (e) {
      console.warn('gtag not available:', e);
    }
  }
}
