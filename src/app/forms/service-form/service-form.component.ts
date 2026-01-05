import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var gtag: Function;

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {

  
  inquiryForm!: FormGroup;
  submittedData: any[] = [];
  dialog: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      budget: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.inquiryForm.invalid) {
      Swal.fire('Please fill all required fields correctly.');
      return;
    }

    const formData = this.inquiryForm.value;

    const url = 'https://script.google.com/macros/s/AKfycbxEbU7qP1tLl1DH7TX1rNNpXUfRVi6u6BGIwUezC4ygdDwm0qqULCVzsepkf9tHUFQafw/exec';

    alert('Submitting...');
    alert('Please wait while we process your inquiry.');

    fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Helps prevent CORS errors but limits response visibility
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        alert('Thank You! Your inquiry has been submitted successfully!');
        this.submittedData.push(formData);
        this.inquiryForm.reset();

        // Call conversion tracking AFTER successful submission and Swal success
        this.trackConversion();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong while submitting your inquiry.');
      });
  }


  trackConversion() {
    gtag('event', 'conversion', {
      'send_to': 'AW-714024328/oJ2_CNXf2PYaEIjLvNQC',
      'event_callback': () => {
        console.log("Conversion Tracked");
      }
    });
  }
}
