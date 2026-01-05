import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDiaryComponent } from './client-diary.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

describe('ClientDiaryComponent', () => {
  let component: ClientDiaryComponent;
  let fixture: ComponentFixture<ClientDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDiaryComponent],
      imports: [FormsModule, NoopAnimationsModule],
      providers: [
        { provide: DOCUMENT, useValue: document },
        {
          provide: YoutubeService,
          useValue: {
            getVideos: () => of({ items: [] })
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ClientDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
