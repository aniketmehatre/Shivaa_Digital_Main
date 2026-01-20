import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css']
})
export class RefundPolicyComponent implements OnInit {
  emailid: string = 'digitalshivaa@gmail.com';
  lastUpdated: string = 'January 2024';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Refund Policy | Shivaa Digital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read the Refund Policy for Shivaa Digital. Learn about our transparent and fair refund process for services.' 
    });
  }
}
