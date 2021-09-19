import { Component, OnInit } from '@angular/core';
import { NewsService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  articles: any;
  constructor(service: NewsService) { 
    this.articles = service.getCryptoMeta();
    console.log(service.getCryptoMeta());
  }

  ngOnInit(): void {
  }

}
