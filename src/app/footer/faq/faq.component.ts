import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface Faq {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  emailid: string = 'digitalshivaa@gmail.com';

  readonly faqs: Faq[] = [
    {
      question: 'What services does Digital Shivaa provide?',
      answer: 'We offer end-to-end digital marketing solutions—including SEO, PPC, Social Media Marketing, Web Design & Development, Email Marketing, and Content Marketing—tailored to meet each client\'s specific goals and budget.',
      open: false
    },
    {
      question: 'How do you measure the success of a campaign?',
      answer: 'Success is tracked through clear KPIs such as qualified leads, conversion rates, ROI, website traffic growth, and engagement metrics. We share detailed reports so you always know how your campaigns are performing.',
      open: false
    },
    {
      question: 'When will I see results from digital marketing?',
      answer: 'Some tactics (like paid ads) can produce leads within days, whereas SEO and content strategies typically take 3–6 months for significant organic gains. We outline realistic timelines during onboarding.',
      open: false
    },
    {
      question: 'Do you specialize in any industries?',
      answer: 'While we\'ve had great success with startups, e-commerce, education, and professional services, our data-driven approach adapts to virtually any sector.',
      open: false
    },
    {
      question: 'What is the typical cost of your services?',
      answer: 'Pricing depends on scope, channels, and competition. We provide flexible packages—ranging from one-time projects to monthly retainers—after a free discovery call.',
      open: false
    },
    {
      question: 'Do I have to sign a long-term contract?',
      answer: 'No. We offer both month-to-month and longer-term agreements. Most clients choose a 3- or 6-month retainer to allow data collection and optimization, but you\'re free to decide what fits best.',
      open: false
    },
    {
      question: 'How often will I receive performance reports?',
      answer: 'You\'ll get a comprehensive report each month (weekly upon request) covering traffic, lead quality, ad spend, keyword rankings, and next-step recommendations.',
      open: false
    },
    {
      question: 'How do I get started?',
      answer: 'Simply email us at digitalshivaa@gmail.com or call +91 70 200 70 178. We\'ll schedule a free consultation to discuss goals, audit your current presence, and craft a custom strategy.',
      open: false
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Frequently Asked Questions (FAQ) | Shivaa Digital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Find answers to frequently asked questions about Shivaa Digital marketing services, pricing, contracts, and more.' 
    });
  }
}
