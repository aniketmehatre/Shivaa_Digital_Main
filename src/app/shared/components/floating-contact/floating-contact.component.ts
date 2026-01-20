import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-floating-contact',
  templateUrl: './floating-contact.component.html',
  styleUrls: ['./floating-contact.component.css']
})
export class FloatingContactComponent implements OnInit, OnDestroy {
  isFormOpen = false;
  isSticky = false;
  private scrollListener?: () => void;

  ngOnInit(): void {
    this.checkScroll();
    this.scrollListener = () => this.checkScroll();
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private checkScroll(): void {
    const scrollThreshold = 200; // Show sticky button after scrolling 200px
    this.isSticky = window.scrollY > scrollThreshold;
  }

  toggleForm(): void {
    this.isFormOpen = !this.isFormOpen;
  }

  closeForm(): void {
    this.isFormOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isFormOpen) {
      this.closeForm();
    }
  }
}
