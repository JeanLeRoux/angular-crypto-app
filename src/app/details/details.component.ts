import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import * as Highcharts from "highcharts/highstock";
import { Options } from "highcharts/highstock";
import IndicatorsCore from "highcharts/indicators/indicators";
import IndicatorZigzag from "highcharts/indicators/zigzag";
IndicatorsCore(Highcharts);
IndicatorZigzag(Highcharts);

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
  constructor(private route: ActivatedRoute, private service: DetailsService) { }

  Highcharts: typeof Highcharts = Highcharts;
  articles: CryptoNews[] = [];
  chartOptions: Options = {};
  loading: boolean = true;
  cryptoName: string = "";

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cryptoName = id;
    this.service.getCryptoNews(id).subscribe((data:any)=>{
      this.articles = data.data;
    })

    this.service.getGraphData().subscribe((data:any)=>{
    this.chartOptions = {
      xAxis: {
        crosshair: true
    },
    yAxis: {
        crosshair: true
    },
    tooltip: {
      formatter(){
        let point = this
        let price;
        let vol;
        data.forEach((d:any) => {
          if(d[0] == point.x){
            price = d[1]
            vol = d[2]
          }
        })
        return `Price ${price} </br>Vol 24H ${vol}`
      }
    },
      series: [
        {
          type: "area",
          pointInterval: 24 * 3600 * 1000,
          
          zones: [{
            value: 42000,
            color: '#ea3943'
          }, {
            color: '#16c784'
          }],
          data: data
        }
      ]
    };
    this.loading = false;
    }) 
    
  }

}
