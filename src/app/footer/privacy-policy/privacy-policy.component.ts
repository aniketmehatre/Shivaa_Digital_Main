import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  emailid: string = 'digitalshivaa@gmail.com';
  lastUpdated: string = 'January 2024';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy | Shivaa Digital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read the Privacy Policy for Shivaa Digital. Learn how we collect, use, and protect your personal information when you use our services.' 
    });
  }
}
