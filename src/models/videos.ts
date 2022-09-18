export interface Videos {
  id: {
    videoId: string;
    kind: string;
  };
  title: string;
  description: string;
  date: string;
  publishedAt: string;

  thumbnails: {
    default: {
      height: number;
      url: string;
      width: number;
    };
  };
}

export interface VideoDetails {
  title: string;
  contentDetails: {
    caption: boolean;
    contentRating: {};
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };

  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };

  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
}
