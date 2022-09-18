import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Youtube_videosService } from 'src/app/services/youtube_videos.service';
import { VideoDetails } from '../models/videos';
@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
})
export class VideoDetailsComponent implements OnInit {
  Video_id!: string;
  ChoosedVideo: any;
  constructor(
    private videos_service: Youtube_videosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.GetVideoDetails();
  }

  /**
   * Developer : Eng/Omar Salem
   * Function name : GetVideoDetails
   * Function parameter : this function takes choosed video id as a parameter
   * Purpose : this function get all specific data for choosed video based on video id
   */
  GetVideoDetails() {
    this.route.params.subscribe((data) => {
      this.Video_id = data.id;
    });
    this.videos_service.GetVideoRating(this.Video_id).subscribe((Data: any) => {
      debugger;
      this.ChoosedVideo = {
        views: Data.items[0].statistics.viewCount,
        likes: Data.items[0].statistics.likeCount,
        duaration: Data.items[0].contentDetails.duration,
        title: Data.items[0].snippet.title,
        description: Data.items[0].snippet.description,
        img: Data.items[0].snippet.thumbnails.default,
        publishDate: Data.items[0].snippet.publishedAt,
      };
    });
  }
}
