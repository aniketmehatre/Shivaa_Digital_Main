import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-android-app-development',
  templateUrl: './android-app-development.component.html',
  styleUrls: ['./android-app-development.component.css']
})
export class AndroidAppDevelopmentComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Mobile App Development Company in Pune | Android & iOS Apps - Digital Shivaa');

    this.meta.updateTag({
      name: 'description',
      content:
        'Mobile app development services in Pune for Android and iOS. Digital Shivaa builds fast, secure, scalable apps for startups and businesses—from UI/UX to backend and store launch.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'mobile app development services in pune, mobile app development company pune, android app development in pune, ios app development in pune, mobile application development company pune, custom mobile app development pune, app developers pune, flutter app development pune, react native app development pune'
    });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Digital Shivaa' });


    // 🔹 Open Graph Meta Tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Mobile App Development Company in Pune | Android & iOS Apps - Digital Shivaa'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Mobile app development services in Pune for Android and iOS. Digital Shivaa builds apps that perform—UI/UX, development, QA, launch, and support.'
    });
    this.meta.updateTag({ property: 'og:image', content: 'https://digitalshivaa.com/assets/img/android-dev.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://digitalshivaa.com/android-app-development' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });



    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Digital Shivaa - Mobile App Development",
      "serviceType": ["Mobile App Development", "Android App Development", "iOS App Development"],
      "image": "https://digitalshivaa.com/assets/images/logo.png",
      "@id": "https://digitalshivaa.com/android-app-development",
      "url": "https://digitalshivaa.com/android-app-development",
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
