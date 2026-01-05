import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ppc-management',
  templateUrl: './ppc-management.component.html',
  styleUrls: ['./ppc-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PpcManagementComponent implements OnInit {
  private readonly canonicalUrl = 'https://digitalshivaa.com/services/ppc-management';
  private readonly canonicalId = 'canonical-ppc-management';
  private readonly schemaId = 'schema-ppc-management';

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const pageTitle =
      'PPC Management Services in Pune | Google Ads & Paid Advertising – Digital Shivaa';
    const description =
      'Maximize ROI with PPC management services in Pune by Digital Shivaa. Google Ads, Meta Ads, remarketing, and conversion tracking to generate high-quality leads and sales.';
    const keywords =
      'ppc management services in pune, ppc services in pune, google ads management pune, google ads agency pune, paid advertising services pune, performance marketing agency pune, pay per click pune, lead generation pune, remarketing, display ads, youtube ads, meta ads, conversion tracking';
    const ogImage = 'https://digitalshivaa.com/assets/img/ppc-img.png';

    this.title.setTitle(pageTitle);

    // Core meta
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Digital Shivaa' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    // Canonical and JSON-LD (SPA-friendly upsert to avoid duplicates)
    this.upsertCanonical(this.canonicalUrl);
    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Digital Shivaa - PPC Management Services in Pune',
      serviceType: [
        'PPC Management',
        'Google Ads Management',
        'Performance Marketing',
        'Paid Advertising'
      ],
      image: ogImage,
      '@id': this.canonicalUrl,
      url: this.canonicalUrl,
      telephone: '+91 702 0070 178',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Deccan Gymkhana',
        addressLocality: 'Pune',
        addressRegion: 'MH',
        postalCode: '411001',
        addressCountry: 'IN'
      },
      areaServed: [
        { '@type': 'City', name: 'Pune' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
        { '@type': 'Country', name: 'India' }
      ],
      sameAs: [
        'https://www.facebook.com/shivaadigital',
        'https://www.instagram.com/shivaadigital'
      ]
    });
  }

  private upsertCanonical(href: string): void {
    const head = this.document.head;
    const existing = head.querySelector<HTMLLinkElement>(`link#${this.canonicalId}`);

    if (existing) {
      existing.rel = 'canonical';
      existing.href = href;
      return;
    }

    const link = this.renderer.createElement('link') as HTMLLinkElement;
    link.id = this.canonicalId;
    link.rel = 'canonical';
    link.href = href;
    this.renderer.appendChild(head, link);
  }

  private upsertJsonLd(schema: unknown): void {
    const head = this.document.head;
    const json = JSON.stringify(schema);
    const existing = head.querySelector<HTMLScriptElement>(`script#${this.schemaId}`);

    if (existing) {
      existing.type = 'application/ld+json';
      existing.text = json;
      return;
    }

    const script = this.renderer.createElement('script') as HTMLScriptElement;
    script.id = this.schemaId;
    script.type = 'application/ld+json';
    script.text = json;
    this.renderer.appendChild(head, script);
  }
}
