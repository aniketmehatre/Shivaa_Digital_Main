import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kids-learn',
  templateUrl: './kids-learn.component.html',
  styleUrls: ['./kids-learn.component.css']
})
export class KidsLearnComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const pageTitle =
      'AI + Social Media Skill Workshop for Kids & Teens | Digital Shivaa';
    const description =
      '1-month AI-powered social media workshop for kids and teens (10-18). Learn scripting, filming, editing, and monetization. Online + offline in Pune every Sunday 12-2 PM.';
    const keywords =
      'social media workshop for kids, ai content creation course for teens, instagram reels training pune, youtube shorts workshop for students, digital creator course for children, pocket money skills for kids, pune weekend social media class';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'author', content: 'Digital Shivaa' });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://digitalshivaa.com/assets/img/ai-social-media-workshop-kids.jpg'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://digitalshivaa.com/learn/kids-learn'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'AI + Social Media Skill Workshop for Kids & Teens',
      description,
      provider: {
        '@type': 'Organization',
        name: 'Digital Shivaa',
        url: 'https://digitalshivaa.com'
      },
      educationalCredentialAwarded: 'Certificate of Completion',
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
        audienceType: 'Kids and Teens aged 10-18'
      },
      timeRequired: 'P1M',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['online', 'offline'],
        startDate: '2026-01-04',
        endDate: '2026-02-04',
        location: {
          '@type': 'Place',
          name: 'TechRel Institute, Deccan Corner, Pune',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'MH',
            addressCountry: 'IN'
          }
        },
        instructor: {
          '@type': 'Person',
          name: 'Digital Creators Team',
          description: 'AI-assisted content creation mentors'
        }
      }
    };

    this.injectStructuredData(ldJson);
  }

  private injectStructuredData(data: Record<string, unknown>): void {
    const scriptId = 'kids-learn-ld-json';
    const existing = this.document.getElementById(scriptId);
    if (existing) {
      this.renderer.removeChild(this.document.head, existing);
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.document.head, script);
  }
}

