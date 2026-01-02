import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type Project = {
  name: string;
  shortDescription: string;
  image: string;
  demoUrl: string;
  caseStudy: string;
  tags?: string[];
};

@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.css']
})
export class WebsiteDevelopmentComponent implements OnInit {
  heroHighlights: string[] = [
    'Modern UI',
    'SEO Optimized',
    'Tailored Strategies',
    'Online success',
    'Fast Performance',
    'Digital excellence'
  ];

  heroSnapshot =
    'https://res.cloudinary.com/dfas0irwb/image/upload/v1735795500/web-dev-hero-digital-shivaa.png';

  projects: Project[] = [
    {
      name: 'E-commerce Platform',
      shortDescription:
        'Full-featured commerce with intuitive UX, secure payments, and mobile-first flows.',
      image:
        'https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80',
      demoUrl: 'https://demo.example.com/ecommerce',
      caseStudy: 'Boosted conversions by 32% with optimized checkout.',
      tags: ['Ecommerce', 'B2C']
    },
    {
      name: 'HR Management System',
      shortDescription:
        'People ops suite for payroll, attendance, and approvals with role-based access.',
      image:
        'https://cdnblog.webkul.com/blog/wp-content/uploads/2025/05/blog-images05-1200x747.webp',
      demoUrl: 'https://demo.example.com/hr',
      caseStudy: 'Reduced HR processing time by 40% for a leading firm.',
      tags: ['Enterprise', 'Workflow']
    },
    {
      name: 'Task Management System',
      shortDescription: 'Planning, tracking, and reporting to keep teams aligned.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtIMmdeM4GDbLB64tudwpfJpCDxPd-xcW5w&s',
      demoUrl: 'https://demo.example.com/tasks',
      caseStudy: 'Improved on-time delivery by 27% across teams.',
      tags: ['Productivity', 'SaaS']
    },
    {
      name: 'Institute Management System',
      shortDescription:
        'Enrollment, attendance, grading, and communication on one secure portal.',
      image: 'https://geniuserp.in/assets/img/institute-student-management.png',
      demoUrl: 'https://demo.example.com/institute',
      caseStudy: 'Enabled 5k+ students to access results online securely.',
      tags: ['EdTech', 'Portal']
    },
    {
      name: 'Online Exam Portal',
      shortDescription:
        'Scalable assessment engine with proctoring, analytics, and instant results.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSKWT4ho2Lm_GnbEj9BYtUFiM1wYHxczE8fPKYU_9ycDjISlp9qTchgRPtZGWw2PMeuQ&usqp=CAU',
      demoUrl: 'https://demo.example.com/exams',
      caseStudy: 'Handled 20k concurrent assessments without downtime.',
      tags: ['Assessment', 'Cloud']
    },
    {
      name: 'Cafe Management System',
      shortDescription:
        'POS, inventory, loyalty, and kitchen display to streamline cafe operations.',
      image:
        'https://static.vecteezy.com/system/resources/previews/043/215/253/non_2x/a-logo-featuring-the-word-cafe-in-various-typography-styles-for-a-trendy-cafe-brand-experiment-with-different-typography-styles-for-a-minimalist-cafe-logo-free-vector.jpg',
      demoUrl: 'https://demo.example.com/cafe',
      caseStudy: 'Cut order wait times by 22% with kitchen display routing.',
      tags: ['Retail', 'POS']
    },
    {
      name: 'API Services',
      shortDescription:
        'Robust API gateway with monitoring, throttling, and SLA-driven reliability.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGTO6iAz0OXip8a7Sz08bs7X6-VbSQAnH6w&s',
      demoUrl: 'https://demo.example.com/api',
      caseStudy: '99.98% uptime with automated health and alerting.',
      tags: ['Platform', 'Integration']
    },
    {
      name: 'PDF Generator Application',
      shortDescription:
        'Dynamic document creation with secure delivery and template governance.',
      image: 'https://pipldsc.com/wp-content/uploads/2023/07/image-21.png',
      demoUrl: 'https://demo.example.com/pdf',
      caseStudy: 'Accelerated document turnaround from days to minutes.',
      tags: ['Automation', 'Docs']
    },
    {
      name: 'TechRel Institute',
      shortDescription:
        'Learning platform with course catalogs, enrollment, and alumni engagement.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmADkJexlemwa8WFqOhnUALaoSBHk9ALAEKA&s',
      demoUrl: 'https://demo.example.com/techrel',
      caseStudy: 'Doubled learner engagement with personalized dashboards.',
      tags: ['EdTech', 'Community']
    }
  ];

  selectedProject: Project | null = null;

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) {}

  viewMore(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }

  ngOnInit(): void {
    this.title.setTitle(
      'Website Development Company in Pune | Web, Ecommerce & More'
    );

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Top web development company in Pune offering custom websites, ecommerce solutions, and digital portals. We build SEO-ready, responsive websites.'
      },
      {
        name: 'keywords',
        content:
          'website development company in pune, web development company in pune, ecommerce website development company in pune, top website development company in pune, web development in pune'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digital Shivaa' }
    ]);

    this.meta.updateTag({
      property: 'og:title',
      content: 'Best Website Development Company in Pune | Digital Shivaa'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Top web development company in Pune offering custom websites, ecommerce solutions, and digital portals.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://digitalshivaa.com/assets/carousel-1.png'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://digitalshivaa.com/services/website-development'
    });

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Digital Shivaa - Website Development",
      "image": "https://digitalshivaa.com/assets/images/logo.png",
      "@id": "https://digitalshivaa.com/Website_Development",
      "url": "https://digitalshivaa.com/Website_Development",
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
