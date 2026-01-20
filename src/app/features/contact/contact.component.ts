import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSEO(
      'Contact Shivaa Digital | Get In Touch',
      'Connect with Shivaa Digital for digital marketing, web development, and growth-focused strategies. Call +91 70200 70178 or email digitalshivaa@gmail.com.',
      {
        keywords: 'contact digital shivaa, digital marketing agency pune contact, shivaa digital phone, digitalshivaa email, marketing consultation pune',
        canonicalUrl: 'https://digitalshivaa.com/contact',
        ogImage: 'https://digitalshivaa.com/assets/img/digitalshivaa-com.jpeg'
      }
    );
  }
}
