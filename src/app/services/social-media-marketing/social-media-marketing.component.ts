import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';

@Component({
  selector: 'app-social-media-marketing',
  templateUrl: './social-media-marketing.component.html',
  styleUrls: ['./social-media-marketing.component.css']
})
export class SocialMediaMarketingComponent implements OnInit {
  private schemaScriptAdded = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Result-Driven Social Media Marketing in Pune | Digital Shivaa'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Digital Shivaa is a top social media marketing agency in Pune delivering engagement, followers, and conversion growth with strategic campaigns.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'social media marketing agency in pune, social media marketing in pune, social media marketing companies in pune, best social media marketing company in pune, social media agency pune, pune smm services'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Best Social Media Marketing Company in Pune | Digital Shivaa'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Strategic social media solutions for your business in Pune. Grow your brand with Digital Shivaa.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://digitalshivaa.com/assets/carousel-1.png'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://digitalshivaa.com/services/social-media-marketing'
    });

    this.addSchemaScript();
  }

  private addSchemaScript(): void {
    if (this.schemaScriptAdded) {
      return;
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Digital Shivaa - Social Media Marketing Agency in Pune",
      "image": "https://digitalshivaa.com/assets/img/carousel-1.jpg",
      "@id": "https://digitalshivaa.com/services/social-media-marketing",
      "url": "https://digitalshivaa.com/services/social-media-marketing",
      "telephone": "+91 702 0070 178",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Deccan Gymkhana",
        "addressLocality": "Pune",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "areaServed": "IN",
      "sameAs": [
        "https://www.facebook.com/shivaadigital",
        "https://www.instagram.com/shivaadigital"
      ]
    }`;

    this.renderer.appendChild(this.document.head, script);
    this.schemaScriptAdded = true;
  }

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
