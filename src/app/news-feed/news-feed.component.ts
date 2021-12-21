import { Component, OnInit } from '@angular/core';
import { NewsFeed } from '../shared/model/NewsFeed';
import { SharepointService } from '../shared/services/sharepoint.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsFeedData: NewsFeed[] = [];
  constructor(public sharepointService: SharepointService) { }

  ngOnInit(): void {
    this.getNewsFeedData();
  }
  getNewsFeedData() {
    this.sharepointService.getNewsFeedData().then((res) => {
      this.newsFeedData = res;
    });
  }
  openLink(newsLink) {
    window.open(newsLink, "_blank");
  }
}
