import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Videos, VideoDetails } from '../../models/videos';
@Injectable({
  providedIn: 'root',
})
export class Youtube_videosService {
  baseUrl = environment.base_url;
  API_Key = environment.API_KEY;
  constructor(private http: HttpClient) {}

  GetChannelVideos(): Observable<Videos[]> {
    return this.http.get<Videos[]>(
      `${this.baseUrl}search?key=${this.API_Key}&channelId=UCW5YeuERMmlnqo4oq8vwUpg&order=date&part=snippet&type=video,id&maxResults=10`
    );
  }

  GetVideoRating(video_id: string): Observable<VideoDetails> {
    return this.http.get<VideoDetails>(
      `${this.baseUrl}videos?part=snippet,contentDetails,statistics&id=${video_id}&key=${this.API_Key}`
    );
  }
}
