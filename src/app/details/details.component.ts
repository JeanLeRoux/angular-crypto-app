import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  articles: CryptoNews[] = [];
  constructor(private route: ActivatedRoute, private service: DetailsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.service.getCryptoNews().subscribe((data:any)=>{
      this.articles = data.data;
    })
  }

}
