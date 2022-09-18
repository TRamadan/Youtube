/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Youtube_videosService } from './youtube_videos.service';

describe('Service: Youtube_videos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Youtube_videosService]
    });
  });

  it('should ...', inject([Youtube_videosService], (service: Youtube_videosService) => {
    expect(service).toBeTruthy();
  }));
});
