import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {
  lastUpdated: string = 'January 2024';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Terms & Conditions | Shivaa Digital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read the Terms & Conditions for using Shivaa Digital website and services. Understand your rights and obligations when using our platform.' 
    });
  }
}
