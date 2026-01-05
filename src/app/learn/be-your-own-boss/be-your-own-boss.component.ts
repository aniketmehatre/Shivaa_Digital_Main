import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SyllabusModule = {
  title: string;
  subtitle: string;
  bullets: string[];
};

type Faq = {
  question: string;
  answer: string;
  open?: boolean;
};

@Component({
  selector: 'app-be-your-own-boss',
  templateUrl: './be-your-own-boss.component.html',
  styleUrls: ['./be-your-own-boss.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeYourOwnBossComponent implements OnInit {
  private readonly canonicalUrl = 'https://digitalshivaa.com/learn/digital-marketing';
  private readonly canonicalId = 'canonical-digital-marketing';
  private readonly schemaId = 'schema-digital-marketing';

  readonly phoneHref = 'tel:+917020070178';
  readonly whatsappHref = 'https://wa.me/917020070178';
  readonly demoHref = 'https://rzp.io/rzp/shivaadigitalcourse';
  readonly brochureHref =
    'https://drive.google.com/uc?export=download&id=13OYT49HPSSnKhE63jUZzW7UBRvzkfT2t';

  readonly testimonials: string[] = [
    'assets/img/place-stud/1 (1).jpeg',
    'assets/img/place-stud/1 (2).jpeg',
    'assets/img/place-stud/1 (3).jpeg',
    'assets/img/place-stud/1 (4).jpeg',
    'assets/img/place-stud/1 (5).jpeg',
  ];


  readonly syllabus: SyllabusModule[] = [
    {
      title: 'Module 1: Introduction to Digital Marketing',
      subtitle: 'Fundamentals, Platforms & Growth Mindset',
      bullets: [
        'What is an online digital marketing course?',
       ' Understanding the Digital Ecosystem',
        'Digital vs. Traditional Marketing',
        'Setting up your Digital Marketing Growth Mindset'
      ]
    },
    {
      title: 'Module 2: Website Fundamentals & SEO',
      subtitle: 'Keyword Research & Search Engine Mastery',
      bullets: [
        'Domain, Hosting, and CMS (WordPress)',
        'Keyword Research for SEO & Paid Campaigns',
        'On-Page, Off-Page, and Technical SEO',
        'Google Search Console & Bing Webmaster Tools'
      ]
    },
    {
      title: 'Module 3: Content Marketing Strategy',
      subtitle: 'Conversion-Focused Content',
      bullets: [
        'Content Strategy for online marketing courses',  
        'Blogging, Landing Page Copywriting, and Video Scripts',
        'Creating High-Converting Sales Funnels',
        'Visual Design Fundamentals for Marketers'
      ]
    },
    {
      title: 'Module 4: Online Social Media Marketing Course',
      subtitle: 'Facebook, Instagram, LinkedIn Marketing & Growth',
      bullets: [
        'Organic Growth Strategies for 2024-25',	
        'Social Media Algorithm Secrets',
        'Community Building and Management',
        'LinkedIn Professional Branding & B2B Growth'
      ]
    },
    {
      title: 'Module 5: Google Ads & Paid Advertising',
      subtitle: 'Search, Display & Video Ads & ROI',
      bullets: [
        'Setting up best digital marketing courses campaigns',
        'Google Search Ads & Bidding Strategies',
        'YouTube Video Ads & Remarketing',
        'Performance Max & Display Network'
      ]
    },
    {
      title: 'Module 6: Email Marketing & Lead Generation',
      subtitle: 'Automation, Funnels & CRM',
      bullets: [
        'Email Automation & Drip Campaigns',
        'Lead Magnet Creation & Lead Scoring',
        'CRM Basics (Zoho, HubSpot)',
        'WhatsApp & Marketing Automation'
      ]
    },
    {
      title: 'Module 7: Analytics, Strategy & Execution',
      subtitle: 'Google Analytics, Reporting & ROI',
      bullets: [
        'Google Analytics 4 (GA4) Mastery',
        'Tracking User Behavior & Goal Conversions',
        'Building Performance Reports for Clients',
        'Executing a Full-Funnel Marketing Strategy'
      ]
    },
    {
      title: 'Module 8: Agency Setup & Client Acquisition',
      subtitle: 'Scaling Your Digital Marketing Agency',
      bullets: [
        'Agency Pricing Models & Packages',
        'Writing Winning Proposals & Contracts',
        'Client Onboarding & Retention Strategies',
        'Scaling from Freelancer to Agency Owner'
      ]
    },
  ];

  readonly faqs: Faq[] = [
    {
      question: 'Is this an online digital marketing course?',
      answer: 'Yes, all training is conducted online with live sessions, allowing you to learn from anywhere with real-time interaction.'
    },
    {
      question: 'Does this course include social media marketing?',
      answer: 'Absolutely. It includes a complete online social media marketing course covering Facebook, Instagram, LinkedIn, and growth strategies.'
    },
    {
      question: 'Is certification included?',
      answer: 'Yes, you will receive an industry-recognized certification upon successful completion of the course and live projects.'
    },
    {
      question: 'Is this suitable for beginners?',
      answer: 'Yes! The curriculum is designed to take you from the absolute basics to advanced agency-level execution.'
    }
  ];

  // Backward-compatibility for older template versions that toggled FAQ state manually
  toggleFAQ(index: number): void {
    const item = this.faqs[index];
    item.open = !item.open;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    const pageTitle = 'Digital Marketing Course in Pune with Placement | Shivaa Digital';
    const description =
      'Learn digital marketing with hands-on training in SEO, social media, Google Ads, analytics and live projects. Online & offline batches in Pune with placement support.';
    const keywords =
      'digital marketing course in pune, digital marketing classes in pune, best digital marketing course in pune, digital marketing institute in pune, SEO course pune, social media marketing course pune, google ads course pune';
    const ogImage = 'https://digitalshivaa.com/assets/img/SEO-marketing.jpg';

    this.title.setTitle(pageTitle);

    // Core meta (use updateTag to avoid duplicates on SPA navigation)
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Shivaa Digital' });

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

    // Canonical + Structured data
    this.upsertCanonical(this.canonicalUrl);
    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': this.canonicalUrl,
          url: this.canonicalUrl,
          name: pageTitle,
          description,
          inLanguage: 'en-IN'
        },
        {
          '@type': 'Course',
          name: 'Digital Marketing Course',
          description:
            'Digital marketing course with SEO, social media marketing, Google Ads, analytics and live projects.',
          provider: {
            '@type': 'Organization',
            name: 'Shivaa Digital',
            url: 'https://digitalshivaa.com'
          }
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }
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
