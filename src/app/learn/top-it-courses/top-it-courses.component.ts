import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef, ViewChild, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';

type Course = {
  title: string;
  image: string;
  tech: string;
  duration: string;
  fees: string;
  syllabus: string[];
};

type Faq = {
  question: string;
  answer: string;
};

@Component({
  selector: 'app-top-it-courses',
  templateUrl: './top-it-courses.component.html',
  styleUrls: ['./top-it-courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TopItCoursesComponent implements OnInit {
  private readonly canonicalUrl = 'https://digitalshivaa.com/learn/top-it-courses';
  private readonly canonicalId = 'canonical-top-it-courses';
  private readonly schemaId = 'schema-top-it-courses';

  @ViewChild('courseDialog') courseDialog!: TemplateRef<any>;
  selectedCourse?: Course;

  readonly phoneHref = 'tel:+917020070178';
  readonly whatsappHref = 'https://wa.me/917020070178';

  constructor(
    private dialog: MatDialog,
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    const pageTitle = 'Top IT Courses in Pune with Placement Support | Shivaa Digital';
    const description =
      'Join Shivaa Digital for job-ready IT courses in Pune: .NET, Java, MERN & MEAN full stack programs with real projects, internship, and placement support.';
    const keywords =
      'top it courses in pune, it courses in pune with placement, software training institute in pune, full stack developer course pune, dot net full stack course pune, java full stack course pune, mern stack course pune, mean stack course pune, pay after placement courses in pune, it training institute in pune';
    const ogImage = 'https://digitalshivaa.com/assets/img/ITcourse/hero.avif';

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
          '@type': 'ItemList',
          name: 'Top IT Courses in Pune',
          itemListElement: this.courses.map((c, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Course',
              name: c.title,
              description: `${c.title} course with projects, internship and placement support at Shivaa Digital.`,
              provider: {
                '@type': 'Organization',
                name: 'Shivaa Digital',
                url: 'https://digitalshivaa.com'
              }
            }
          }))
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

  get courseTitles(): string[] {
    return this.courses.map(c => c.title);
  }

  readonly courses: Course[] = [
    {
      title: '.NET Full Stack Developer',
      image: 'assets/img/ITcourse/NET.svg.png',
      tech: 'C#, ASP.NET Core, Web API, Angular, SQL Server',
      duration: '4 Months Training + 2 Months Internship',
      fees: '₹29,999 /-',
      syllabus: [
        'C# & OOPS Concepts',
        'ASP.NET Core & Web API',
        'Entity Framework Core',
        'Angular Frontend Integration',
        'SQL Server Database Management',
        'Live Industry Project'
      ]
    },
    {
      title: 'MERN Stack Developer',
      image: 'assets/img/ITcourse/React.Js.svg',
      tech: 'MongoDB, Express, React, Node.js',
      duration: '4 Months Training + 2 Months Internship',
      fees: '₹29,999 /-',
      syllabus: [
        'MongoDB NoSQL Database',
        'Express.js Backend Framework',
        'React.js Library & Hooks',
        'Node.js Runtime Environment',
        'JWT Authentication & Security',
        'Deployment on AWS/Heroku'
      ]
    },
    {
      title: 'Java Full Stack Developer',
      image: 'assets/img/ITcourse/java-logo-1.svg',
      tech: 'Core Java, Spring Boot, Hibernate, Angular, MySQL',
      duration: '4 Months Training + 2 Months Internship',
      fees: '₹29,999 /-',
      syllabus: [
        'Core & Advanced Java (J2EE)',
        'Spring Boot Microservices',
        'Hibernate & JPA ORM',
        'Angular Frontend Framework',
        'MySQL Relational Database',
        'Microservices Architecture'
      ]
    },
    {
      title: 'MEAN Stack Developer',
      image: 'assets/img/ITcourse/Angular.svg',
      tech: 'MongoDB, Express, Angular, Node.js',
      duration: '4 Months Training + 2 Months Internship',
      fees: '₹29,999 /-',
      syllabus: [
        'MongoDB Data Modeling',
        'Node.js & Express API Development',
        'Angular RxJS & State Management',
        'RESTful API Design',
        'Unit Testing with Jasmine/Karma',
        'Real-time Project Deployment'
      ]
    }
  ];

  readonly faqs: Faq[] = [
    {
      question: 'Do you provide placement assistance for IT courses in Pune?',
      answer: 'Yes. We provide resume building, LinkedIn optimization, mock interviews, and job referrals until placement.'
    },
    {
      question: 'Which course is best for a fresher: .NET, Java, MERN or MEAN?',
      answer: 'It depends on your interest. We guide you based on background, learning goals, and job market demand during counseling.'
    },
    {
      question: 'Do you offer online and offline batches?',
      answer: 'Yes, we offer both online and offline batches with flexible timings.'
    },
    {
      question: 'What is the duration of the full stack courses?',
      answer: 'Most programs are 4 months training + 2 months internship (course-wise variations may apply).'
    }
  ];

  openDialog(course: Course) {
    this.selectedCourse = course;
    this.dialog.open(this.courseDialog, {
      width: '520px',
      panelClass: 'it-course-dialog',
      autoFocus: false
    });
  }

  enrollOnWhatsApp(course?: Course): void {
    const chosen = course?.title ?? this.selectedCourse?.title ?? 'IT course';
    const message = encodeURIComponent(
      `Hi Shivaa Digital! I want details for ${chosen} course (fees, syllabus, batches & placement support).`
    );
    window.open(`${this.whatsappHref}?text=${message}`, '_blank', 'noopener');
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
