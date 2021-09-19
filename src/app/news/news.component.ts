import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

interface CryptoNews{
  cover: string;
	meta: {
    createdAt: string;
    sourceUrl: string;
    subtitle: string;
    title: string
  }
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: CryptoNews[] = [];
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getCryptoNews().subscribe((data:any)=>{
      this.articles = data.data;
      console.log(data.data)
    })
  }

}
