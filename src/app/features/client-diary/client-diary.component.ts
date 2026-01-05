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
            this.videos = res.items ?? [];
            this.isLoadingVideos = false;
          },
          error: () => {
            this.videoError = 'Unable to load videos right now. Please try again later.';
            this.isLoadingVideos = false;
          }
        });
    } catch {
      // Handles the service throwing synchronously when env config is missing.
      this.videoError = 'YouTube is not configured yet. Please add API key and channel ID.';
      this.isLoadingVideos = false;
    }
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
