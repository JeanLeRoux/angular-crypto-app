import { Component, OnInit } from '@angular/core';
import { DataService } from './home.service';

interface CryptoMeta{
  id: number;
	name: string;
	symbol: string;
	cmcRank: number;
	iconUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  cryptos: CryptoMeta[] = [];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getCryptoMeta().subscribe((data: any) => {
      console.log(data)
      this.cryptos = data
  })
  }

}
