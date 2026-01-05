import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-seo-optimization',
  templateUrl: './seo-optimization.component.html',
  styleUrls: ['./seo-optimization.component.css']
})
export class SeoOptimizationComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {

    this.title.setTitle('Best SEO Services in Pune | #1 SEO Company – Digital Shivaa');

    // 🔹 Meta Description
    this.meta.updateTag({
      name: 'description',
      content: 'Rank higher with expert SEO services in Pune. Local SEO, on-page, and technical SEO by top SEO agency Digital Shivaa.'
    });

    // 🔹 Meta Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'seo services in pune, best seo company in pune, search engine optimization, on-page seo, off-page seo, digitalshivaa seo'
    });

    // 🔹 Open Graph Meta Tags
    this.meta.updateTag({ property: 'og:title', content: 'Best SEO Services in Pune | #1 SEO Company – Digital Shivaa' });
    this.meta.updateTag({ property: 'og:description', content: 'Strategic SEO solutions for your business in Pune. Grow your brand with Digital Shivaa.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://digitalshivaa.com/assets/img/SEO-marketing.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://digitalshivaa.com/Social_Media_Marketing' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });


    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Shivaa Digital - SEO Services",
      "image": "https://digitalshivaa.com/assets/img/SEO-marketing.jpg",
      "@id": "https://digitalshivaa.com/Social_Media_Marketing",
      "url": "https://digitalshivaa.com/Social_Media_Marketing",
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
  }
}
