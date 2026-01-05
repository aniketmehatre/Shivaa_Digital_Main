import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    const params = new HttpParams()
      .set('key', environment.youtubeApiKey)
      .set('channelId', environment.youtubeChannelId)
      .set('part', 'snippet')
      .set('order', 'date')
      .set('maxResults', '12')
      .set('type', 'video');

    return this.http.get<any>(this.apiUrl, { params });
  }
}
