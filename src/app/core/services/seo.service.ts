import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }

  /**
   * Simple SEO helper for SPA routes.
   * Uses `updateTag` to avoid duplicate tags when navigating back/forward.
   */
  setSEO(
    title: string,
    description: string,
    options?: {
      keywords?: string;
      robots?: string;
      author?: string;
      ogImage?: string;
      canonicalUrl?: string;
    }
  ): void {
    this.title.setTitle(title);

    // Core meta
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: options?.robots ?? 'index, follow' });
    this.meta.updateTag({ name: 'author', content: options?.author ?? 'Shivaa Digital' });
    if (options?.keywords) {
      this.meta.updateTag({ name: 'keywords', content: options.keywords });
    }

    // Open Graph (optional)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    if (options?.canonicalUrl) {
      this.meta.updateTag({ property: 'og:url', content: options.canonicalUrl });
    }
    if (options?.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: options.ogImage });
    }

    // Twitter (optional, safe defaults)
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    if (options?.ogImage) {
      this.meta.updateTag({ name: 'twitter:image', content: options.ogImage });
    }
  }
}


