import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import {YoutubeService } from 'src/app/core/services/youtube.service';

@Component({
  selector: 'app-client-diary',
  templateUrl: './client-diary.component.html',
  styleUrls: ['./client-diary.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('260ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ClientDiaryComponent implements OnInit {

  diaryImages: string[] = [];
  diaryCards: Array<{ image: string; title: string; tag?: string }> = [];
  selectedSection: string = 'diary';
  videos: any[] = [];
  isLoadingVideos = false;
  videoError: string | null = null;

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this.loadVideos();

    this.diaryImages = [
      'img-1.jpg', 'img-2.jpg', 'img-3.jpeg', 'img-4.jpeg', 'img-5.jpg',
      'img-6.png', 'img-7.png', 'img-8.png', 'img-9.jpeg', 'img-10.png',
      'img-11.png', 'img-12.png', 'img-13.png', 'img-14.png', 'img-15.png',
      'img-16.png', 'img-17.jpeg', 'img-18.jpeg', 'img-19.jpeg', 'img-20.jpeg',
      'img-21.jpeg', 'img-22.jpeg', 'img-23.jpeg', 'img-24.jpeg', 'img-25.jpeg', 'img-26.png', 'img-27.png'
    ];

    const titles = [
      'TechGrowth Solutions',
      'Creative Canvas Ads',
      'Pune Pulse Digital',
      'MarketSpark Media',
      'BrandVista Studio',
      'Stratsphore Marketing'
    ];

    this.diaryCards = this.diaryImages.map((image, idx) => ({
      image,
      title: titles[idx] ?? `Client Diary Highlight ${idx + 1}`,
      tag: idx < 6 ? 'DigitalShivaa' : undefined
    }));
  }

  private loadVideos(): void {
    this.isLoadingVideos = true;
    this.videoError = null;

    try {
      this.youtubeService
        .getVideos()
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            // Sort videos by published date (latest first)
            const items = res.items ?? [];
            const sortedVideos = items.sort((a: any, b: any) => {
              const dateA = new Date(a.snippet.publishedAt).getTime();
              const dateB = new Date(b.snippet.publishedAt).getTime();
              return dateB - dateA; // Latest first
            });

            // Get video details (statistics and duration) if available
            if (sortedVideos.length > 0) {
              const videoIds = sortedVideos.map((v: any) => v.id.videoId);
              this.youtubeService.getVideoDetails(videoIds)
                .pipe(take(1))
                .subscribe({
                  next: (detailsRes) => {
                    const detailsMap = new Map();
                    (detailsRes.items || []).forEach((item: any) => {
                      detailsMap.set(item.id, item);
                    });
                    
                    // Merge details with videos
                    this.videos = sortedVideos.map((video: any) => ({
                      ...video,
                      contentDetails: detailsMap.get(video.id.videoId)?.contentDetails,
                      statistics: detailsMap.get(video.id.videoId)?.statistics
                    }));
                    this.isLoadingVideos = false;
                  },
                  error: () => {
                    // If details fail, still show videos without extra info
                    this.videos = sortedVideos;
                    this.isLoadingVideos = false;
                  }
                });
            } else {
              this.videos = sortedVideos;
              this.isLoadingVideos = false;
            }
          },
          error: (err) => {
            console.error('YouTube API Error:', err);
            this.videoError = 'Unable to load videos right now. Please try again later.';
            this.isLoadingVideos = false;
          }
        });
    } catch (error) {
      // Handles the service throwing synchronously when env config is missing.
      this.videoError = 'YouTube is not configured yet. Please add API key and channel ID.';
      this.isLoadingVideos = false;
    }
  }

  handleImageError(event: any): void {
    event.target.src = 'assets/img/placeholder.jpg';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  formatViews(views: string | number): string {
    const numViews = typeof views === 'string' ? parseInt(views) : views;
    if (numViews >= 1000000) {
      return (numViews / 1000000).toFixed(1) + 'M';
    } else if (numViews >= 1000) {
      return (numViews / 1000).toFixed(1) + 'K';
    }
    return numViews.toString();
  }

  formatDuration(duration: string): string {
    // Parse ISO 8601 duration format (PT4M13S -> 4:13)
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  setSection(section: string): void {
    this.selectedSection = section;

    setTimeout(() => {
      let element: HTMLElement | null = null;
      if (section === 'diary') {
        element = this.diaryContainer?.nativeElement;
      } else if (section === 'video') {
        element = this.videoContainer?.nativeElement;
      }

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
  @ViewChild('diaryContainer') diaryContainer!: ElementRef;
  @ViewChild('videoContainer') videoContainer!: ElementRef;

  trackByImage = (_: number, img: string) => img;
  trackByDiaryCard = (_: number, item: { image: string }) => item.image;
  trackByVideo = (_: number, video: any) => video?.id?.videoId;
}
