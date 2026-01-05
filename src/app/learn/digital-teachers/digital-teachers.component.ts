import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-digital-teachers',
  templateUrl: './digital-teachers.component.html',
  styleUrls: ['./digital-teachers.component.css']
})
export class DigitalTeachersComponent {
  openDemolink(): void {
    window.open('https://rzp.io/rzp/dmforteachers', '_blank');
  }

  constructor(
    private title: Title, private meta: Meta,
    private renderer: Renderer2,
    private fb: FormBuilder
  ) { }

  @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef;

  closeNavbar() {
    const togglerEl = this.navbarToggler?.nativeElement;

    if (togglerEl && getComputedStyle(togglerEl).display !== 'none') {
      togglerEl.click();
    }
  }
  ngOnInit(): void {
    this.title.setTitle(
      'Digital Marketing Course for Teachers | Digital Shivaa'
    );

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Practical digital marketing course for teachers: build your brand, grow on social media, use AI tools, create a website, and earn online. Weekend batch with live + recorded access.'
      },
      {
        name: 'keywords',
        content:
          'digital marketing course for teachers, social media for teachers, ai tools for educators, teacher personal branding, weekend digital marketing course, teacher online earning'
      },
      { name: 'author', content: 'shivaadigital' }
    ]);

    // 🔹 Open Graph Meta Tags
    this.meta.updateTag({ property: 'og:title', content: 'Digital Marketing Course for Teachers | Digital Shivaa' });
    this.meta.updateTag({ property: 'og:description', content: 'Weekend digital marketing course for teachers with AI tools, social media growth, and monetization guidance.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://digitalshivaa.com/assets/img/digital-teachers.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://digitalshivaa.com/learn/digital-teachers' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });


    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Shivaa Digital - SEO Services",
      "image": "https://digitalshivaa.com/assets/img/SEO-marketing.jpg",
      "@id": "https://digitalshivaa.com/learn-more",
      "url": "https://digitalshivaa.com/learn-more",
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

    this.renderer.appendChild(document.head, script);
}
}