import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SyllabusModule = {
  title: string;
  subtitle: string;
  bullets: string[];
  open?: boolean;
};

type Faq = {
  question: string;
  answer: string;
  open?: boolean;
};

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalMarketingComponent implements OnInit, OnDestroy {
  private readonly canonicalUrl = 'https://digitalshivaa.com/learn/digital-marketing';
  private readonly canonicalId = 'canonical-digital-marketing';
  private readonly schemaId = 'schema-digital-marketing';
  
  currentSlideIndex = 0;
  private autoPlayInterval: any;
  private readonly autoPlayDelay = 4000; // 4 seconds

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
    'assets/img/place-stud/1 (5).jpeg'
  ];

  readonly syllabus: SyllabusModule[] = [
    {
      title: 'Module 1: Introduction to Digital Marketing',
      subtitle: 'Fundamentals, career scope & ecosystem',
      bullets: [
        'Digital marketing basics and career opportunities',
        'Traditional vs digital marketing',
        'Core channels and funnel understanding',
        'Website basics: domain, hosting & WordPress overview'
      ]
    },
    {
      title: 'Module 2: SEO & Content Marketing',
      subtitle: 'Master search visibility',
      bullets: [
        'On-page, off-page & technical SEO',
        'Keyword research and competitor analysis',
        'Content strategy, blogging & SEO writing',
        'Google Search Console and sitemap setup'
      ]
    },
    {
      title: 'Module 3: Social Media Marketing (SMM)',
      subtitle: 'Facebook, Instagram, LinkedIn & growth',
      bullets: [
        'Platform algorithms and content formats',
        'Organic growth and engagement strategies',
        'Community management and brand building',
        'Social media calendar and automation tools'
      ]
    },
    {
      title: 'Module 4: Google Ads & Paid Advertising',
      subtitle: 'Search, display & video ads',
      bullets: [
        'Google Ads setup, structure and bidding',
        'YouTube ads, remarketing and audiences',
        'Conversion tracking and quality score optimization',
        'Performance Max and display network basics'
      ]
    },
    {
      title: 'Module 5: Email & Affiliate Marketing',
      subtitle: 'Automation & monetization',
      bullets: [
        'Lead nurturing and email automation',
        'List building and segmentation',
        'Affiliate ecosystems (Amazon/Clickbank basics)',
        'Monetization strategies for blogs & websites'
      ]
    },
    {
      title: 'Module 6: Analytics & Reporting',
      subtitle: 'Tracking ROI & performance',
      bullets: [
        'Google Analytics 4 (GA4) setup & insights',
        'User behavior and conversion funnels',
        'Goals and event tracking',
        'Monthly reporting for clients'
      ]
    },
    // {
    //   title: 'Module 7: Strategy & Live Projects',
    //   subtitle: 'Real-time client execution',
    //   bullets: [
    //     'Full-funnel strategy and planning',
    //     'Budget allocation and ROI basics',
    //     'Live project: run a real campaign',
    //     'Final presentation & certification guidance'
    //   ]
    // }
  ];

  readonly faqs: Faq[] = [
    {
      question: 'Is this the best digital marketing course in Pune?',
      answer:
        'Yes. The course is practical, updated and focused on skills that help you get hired — with placement support.',
      open: false
    },
    {
      question: 'Do you provide online and offline digital marketing classes?',
      answer: 'Yes. We offer both online and offline batches with flexible timings.',
      open: false
    },
    {
      question: 'Is certification included?',
      answer: 'Yes. You get an industry-recognized certification after successful completion of training and projects.',
      open: false
    }
  ];

  // Backward-compatibility for older template versions that toggled FAQ state manually
  toggleFAQ(index: number): void {
    const item = this.faqs[index];
    item.open = !item.open;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

    // Start auto-play for testimonial slider
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length;
    this.resetAutoPlay();
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  private resetAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    this.startAutoPlay();
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
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
