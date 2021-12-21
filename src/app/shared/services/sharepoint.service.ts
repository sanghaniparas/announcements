import { Injectable } from '@angular/core';
import { Constants } from 'src/app/app.constant';
import { NewsFeed } from '../model/NewsFeed';
import pnp from '@pnp/pnpjs';


@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getNewsFeedData(): Promise<NewsFeed[]> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.lists
        .getByTitle(Constants.NEWS_FEED).items.select("*,NewsDate").orderBy('NewsDate', true).top(5000).get().then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }
}
