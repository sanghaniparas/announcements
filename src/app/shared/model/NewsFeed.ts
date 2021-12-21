export class NewsFeed {
    ID: number;
    Title: string;
    NewsImage: any;
    NewsDate: Date;
    NewsDescription: string;
    NewsLink: any;

    constructor(obj?) {
        this.ID = (obj && obj.ID) || undefined;
        this.Title = (obj && obj.Title) || "";
        this.NewsImage = (obj && obj.NewsImage) || null;
        this.NewsDate = (obj && obj.NewsDate) || new Date();
        this.NewsDescription = (obj && obj.NewsDescription) || "";
        this.NewsLink = (obj && obj.NewsLink) || null;
       
    }
  }
  