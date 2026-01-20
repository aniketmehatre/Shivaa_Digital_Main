import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';
declare var $: any;
declare var WOW: any;
declare var gtag: Function;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  submitted = false;
  inquiryForm !: FormGroup;
  submittedData: any[] = [];
  services: string[] = [
    'Social Media Marketing',
    'Web Design & Development',
    'Search Engine Optimization (SEO)',
    'PPC Management',
    'Android App Development',
  ];

  points: string[] = [
    'Result-Oriented Digital Strategies',
    'Expert SEO & Social Media Marketing',
    'Creative Branding & Design Solutions',
    'Custom Web Development Services'
  ];
  
  currentTestimonialIndex = 0;
  testimonialAutoPlayInterval: any;

  whyShivaaFeatures = [
    {
        icon: 'fa-solid fa-graduation-cap',
      title: 'Expertise',
      description: 'We deliver results-driven digital marketing solutions in Pune. Your brand growth is our priority.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Creative Solutions',
      description: 'We create ideas that stand out and connect your brand. Unique voices, creative results.'
    },
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Trained Staff',
      description: 'Our experts are skilled, certified, and always up-to-date. You\'re in trusted hands.'
    },
    {
      icon: 'fa-solid fa-book-open',
      title: 'Quick Response',
      description: 'Our team is dedicated to providing quick and effective solutions to your needs.'
    }
  ];

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      budget: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setupSEO();
    this.initWOW();
    this.startTestimonialAutoPlay();
  }

  /**
   * Comprehensive SEO Setup
   * Sets page title, meta description, keywords, Open Graph tags, Twitter Cards, and Canonical URL
   */
  private setupSEO(): void {
    const pageTitle = 'Best Digital Marketing Agency in Pune | Digital Shivaa';
    const pageDescription = 'Top-rated digital marketing company in Pune offering expert services to grow your brand online. Reach out to the best agency in Pune today!';
    const pageKeywords = 'best digital marketing agency in pune, best digital marketing agency pune, top digital marketing companies in pune, digital advertising agencies in pune, best digital marketing company pune, best digital marketing services in pune, digital marketing company in pune, digital marketing agency in pune india';
    const canonicalUrl = 'https://digitalshivaa.com';
    const ogImage = 'https://digitalshivaa.com/assets/img/about.jpg';

    // Set Page Title
    this.title.setTitle(pageTitle);

    // Meta Description
    this.meta.updateTag({ name: 'description', content: pageDescription });

    // Meta Keywords
    this.meta.updateTag({ name: 'keywords', content: pageKeywords });

    // Canonical URL
    this.meta.updateTag({ rel: 'canonical', href: canonicalUrl });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Digital Shivaa' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });

    // Twitter Card Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    // Additional SEO Meta Tags
    this.meta.updateTag({ name: 'author', content: 'Digital Shivaa' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.updateTag({ 'http-equiv': 'Content-Language', content: 'en' });

    // Structured Data (JSON-LD)
    this.addStructuredData();
  }

  /**
   * Add JSON-LD Structured Data for SEO
   */
  private addStructuredData(): void {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Shivaa Digital',
      'alternateName': 'Digital Shivaa',
      'image': 'https://digitalshivaa.com/assets/img/about.jpg',
      '@id': 'https://digitalshivaa.com',
      'url': 'https://digitalshivaa.com',
      'telephone': '+91 702 0070 178',
      'email': 'digitalshivaa@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '3rd Floor, Ritika Complex, Narhe Rd, above Sadhna sahkari bank, Wadgaon Budruk, Dhayari Phata',
        'addressLocality': 'Pune',
        'addressRegion': 'Maharashtra',
        'postalCode': '411041',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '18.5204',
        'longitude': '73.8567'
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'India'
      },
      'serviceType': [
        'Digital Marketing',
        'SEO',
        'Social Media Marketing',
        'Web Development',
        'PPC Advertising',
        'Content Marketing',
        'Email Marketing'
      ],
      'sameAs': [
        'https://www.facebook.com/shivaadigital',
        'https://www.instagram.com/shivaadigital'
      ],
      'priceRange': '$$'
    });
    this.renderer.appendChild(document.head, script);
  }

  emailid: string = 'digitalshivaa@gmail.com';
  phoneNumber: string = '+91 702 0070 178';

  email() {
    window.location.href = `mailto:${this.emailid}`;
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

  testimonials = [
    {
      image: 'assets/img/sachin-bagade.jpg',
      name: 'Sachin Bagade',
      profession: 'Entrepreneur',
      feedback: 'Shivaa Digital is an excellent marketing company in Dhayari, Pune. Their team delivers real results with consistent support, professional behavior, and great execution across social media campaigns and digital platforms.'
    },
    {
      image: 'assets/img/digitalshivaa-com.jpeg',
      name: 'Gramanye Institute',
      profession: 'Marketing Manager',
      feedback: 'Very professional and goal-driven digital marketing team. Their strategies have helped us grow our brand and reach our target audience more effectively through consistent branding and optimized SEO and ad campaigns.'
    },
    {
      image: 'assets/img/Techrel-logo.png',
      name: 'TechRel Institute',
      profession: 'Training Institute',
      feedback: 'We saw measurable results from Shivaa Digital’s services. Their digital marketing strategies are focused, clear, and result-oriented, helping us get more traffic and visibility in the education and training space.'
    },
    {
      image: 'assets/img/raju-bhosale.jpg',
      name: 'Raju Bhosale',
      profession: 'Startup Founder',
      feedback: 'Fantastic experience! Their digital support helped grow our startup’s presence quickly. I appreciate the consistent communication, creativity in campaigns, and dedication shown by their whole marketing team.'
    },
    {
      image: 'assets/img/SK-Bit.jpeg',
      name: 'SK-BIT Software Solutions',
      profession: 'IT - Service Provider',
      feedback: 'We hired Shivaa Digital for SEO and social media services. The ROI has been excellent and their digital campaigns helped us attract more leads and improve our brand credibility.'
    }
  ];

  servicesed = [
    {
      title: 'Web Design and Development',
      image: '../../assets/img/Web-sitedev.jpg',
      description: 'Ensure your website is visually appealing, user-friendly, and optimized for conversions.',
      route: '/services/website-development'
    },
    {
      title: 'Search Engine Optimization (SEO)',
      image: '../../assets/img/SEO-marketing.jpg',
      description: 'Maximize online visibility and reach the right audience with our SEO strategies.',
      route: '/services/seo-optimization'
    },
    {
      title: 'Social Media Marketing',
      image: '../../assets/img/socail-media.jpg',
      description: 'Boost your brand presence and engagement across all major social platforms.',
      route: '/services/social-media-marketing'
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      image: '../../assets/img/PPC-markering.jpg',
      description: 'Drive quick results and leads with data-driven PPC campaigns.',
      route: '/services/ppc-management'
    },
    {
      title: 'Email Marketing',
      image: '../../assets/img/email-mar.jpg',
      description: 'Build strong customer relationships and engagement with targeted email campaigns.',
      route: '/contact'
    },
    {
      title: 'Content Marketing',
      image: '../../assets/img/content_marketing.jpg',
      description: 'Deliver valuable content that converts and establishes authority in your field.',
      route: '/contact'
    }
  ];
  ngAfterViewInit(): void {
    this.initWOW();
  }

  private initWOW(): void {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }

  /**
   * Testimonial Carousel Navigation Methods
   */
  nextTestimonial(): void {
    if (this.currentTestimonialIndex < this.testimonials.length - 1) {
      this.currentTestimonialIndex++;
    } else {
      this.currentTestimonialIndex = 0; // Loop back to start
    }
    this.resetAutoPlay();
  }

  previousTestimonial(): void {
    if (this.currentTestimonialIndex > 0) {
      this.currentTestimonialIndex--;
    } else {
      this.currentTestimonialIndex = this.testimonials.length - 1; // Loop to end
    }
    this.resetAutoPlay();
  }

  goToTestimonial(index: number): void {
    if (index >= 0 && index < this.testimonials.length) {
      this.currentTestimonialIndex = index;
      this.resetAutoPlay();
    }
  }

  /**
   * Auto-play testimonials
   */
  private startTestimonialAutoPlay(): void {
    this.testimonialAutoPlayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
  }

  private resetAutoPlay(): void {
    if (this.testimonialAutoPlayInterval) {
      clearInterval(this.testimonialAutoPlayInterval);
    }
    this.startTestimonialAutoPlay();
  }

  ngOnDestroy(): void {
    if (this.testimonialAutoPlayInterval) {
      clearInterval(this.testimonialAutoPlayInterval);
    }
  }

  trackConversion() {
    gtag('event', 'conversion', {
      'send_to': 'AW-714024328/oJ2_CNXf2PYaEIjLvNQC',
      'event_callback': () => {
        console.log("Conversion Tracked");
      }
    });
  }

}

