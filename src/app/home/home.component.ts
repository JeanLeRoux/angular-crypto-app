import { Component, OnInit } from '@angular/core';
import { CryptoMetaService } from './home.service';
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
  constructor(private service: CryptoMetaService) { }

  ngOnInit(): void {
    this.service.getCryptoMeta().subscribe((data: any) => {
      this.cryptos = data
  })
  }
}
