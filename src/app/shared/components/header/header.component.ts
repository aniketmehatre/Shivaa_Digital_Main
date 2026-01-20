import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  
  isScrolled = false;
  isScrolledUp = true;
  lastScrollTop = 0;
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;
  mobileDropdowns: { [key: string]: boolean } = {
    services: false,
    learn: false
  };
  
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Close mobile menu on route change
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
        this.closeAllDropdowns();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Check if scrolled
    this.isScrolled = scrollTop > 50;
    
    // Determine scroll direction
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Scrolling down
      this.isScrolledUp = false;
    } else {
      // Scrolling up
      this.isScrolledUp = true;
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // Desktop Dropdown Methods
  openDropdown(dropdown: string): void {
    if (window.innerWidth > 991) {
      this.activeDropdown = dropdown;
    }
  }

  closeDropdown(dropdown: string): void {
    if (window.innerWidth > 991) {
      // Small delay to allow mouse movement to dropdown
      setTimeout(() => {
        if (this.activeDropdown === dropdown) {
          this.activeDropdown = null;
        }
      }, 200);
    }
  }

  toggleDropdown(dropdown: string): void {
    if (window.innerWidth <= 991) {
      // Mobile behavior handled separately
      return;
    }
    
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdown;
    }
  }

  closeAllDropdowns(): void {
    this.activeDropdown = null;
  }

  // Mobile Menu Methods
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Close all mobile dropdowns when closing menu
      this.mobileDropdowns = {
        services: false,
        learn: false
      };
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
    this.mobileDropdowns = {
      services: false,
      learn: false
    };
  }

  toggleMobileDropdown(dropdown: string): void {
    this.mobileDropdowns[dropdown] = !this.mobileDropdowns[dropdown];
  }

  // Handle window resize
  @HostListener('window:resize')
  onWindowResize(): void {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 991) {
      this.closeMobileMenu();
    }
    
    // Close desktop dropdowns if resized to mobile
    if (window.innerWidth <= 991) {
      this.closeAllDropdowns();
    }
  }

  // Handle click outside to close dropdowns
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    // Close dropdowns if clicking outside
    if (!target.closest('.dropdown') && window.innerWidth > 991) {
      this.closeAllDropdowns();
    }
  }
  navigateToBlog(): void {
    window.open('https://blog.digitalshivaa.com', '_blank');
  }
  openlearn(): void {
    window.open('https://classplusapp.com/w/learn-digitalshivaa', '_blank');
  } 
  openwhatsapp(): void {
    window.open('https://whatsappapi.digitalshivaa.com', '_blank');
  }
}
