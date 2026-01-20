import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  emailid: string = 'digitalshivaa@gmail.com';
  lastUpdated: string = 'January 2024';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Disclaimer | Shivaa Digital');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read the Disclaimer for Shivaa Digital website. Important information about website content, liability limitations, and professional advice.' 
    });
  }
}
