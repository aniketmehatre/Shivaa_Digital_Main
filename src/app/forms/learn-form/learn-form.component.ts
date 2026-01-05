import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-learn-form',
  templateUrl: './learn-form.component.html',
  styleUrls: ['./learn-form.component.css']
})
export class LearnFormComponent implements OnInit {
  @Input() heading = 'Fill the details & download brochure';
  @Input() subheading = 'Get a free counseling call and course details on WhatsApp.';
  @Input() submitText = 'Submit';
  @Input() sourcePage = '';
  @Input() courseOptions: string[] = [
    '.NET Full Stack Developer',
    'Java Full Stack Developer',
    'MERN Stack Developer',
    'MEAN Stack Developer',
    'Digital Marketing',
    'Web Development',
    'Graphic Design',
    'Video Editing',
    'SEO'
  ];

  enquiryForm!: FormGroup;
  passoutYears: number[] = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
  qualifications: string[] = ['12th Pass', 'Diploma', 'Graduate', 'Post Graduate', 'Other'];

  private readonly scriptUrl =
    'https://script.google.com/macros/s/AKfycbxEbU7qP1tLl1DH7TX1rNNpXUfRVi6u6BGIwUezC4ygdDwm0qqULCVzsepkf9tHUFQafw/exec';

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      course: ['', Validators.required],
      passoutYear: ['', Validators.required],
      qualification: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    const formData = {
      ...this.enquiryForm.value,
      sourcePage: this.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : ''),
      submittedAt: new Date().toISOString()
    };

    // 🔹 Show loader only (no success alert)
    Swal.fire({
      title: 'Submitting...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    fetch(this.scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => {
        Swal.close(); // ❌ remove sweetalert success

        this.enquiryForm.reset();

        // 🔹 GTM event
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'contact_form_submit',
          form_name: 'learn_form',
          source_page: formData.sourcePage,
          selected_course: formData.course
        });

        // 🔹 Open Thank You popup
        const dialogRef = this.dialog.open(ThankYouComponent, {
          width: '520px',
          disableClose: false,
          data: {
            name: formData.name,
            course: formData.course
          }
        });

        dialogRef.afterClosed().subscribe(() => { });
      })
      .catch(() => {
        Swal.close();
        Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
      });
  }

}
