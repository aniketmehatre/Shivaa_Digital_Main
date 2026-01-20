import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

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

    Swal.fire({
      title: 'Submitting...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Helps prevent CORS errors but limits response visibility
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        Swal.close();
        this.submittedData.push(formData);
        this.inquiryForm.reset();

        // Navigate to thank-you page with state
        this.router.navigate(
          ['/thank-you'],
          { state: { name: formData.name, course: formData.service } }
        );

        // Call conversion tracking AFTER successful submission
        this.trackConversion();
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.close();
        Swal.fire('Error', 'Something went wrong while submitting your inquiry.', 'error');
      });
  }


  trackConversion() {
    try {
      gtag('event', 'conversion', {
        send_to: 'AW-714024328/oJ2_CNXf2PYaEIjLvNQC',
        event_callback: () => {
          console.log("Conversion Tracked");
        }
      });
    } catch (e) {
      console.warn('gtag not available:', e);
    }
  }
}
