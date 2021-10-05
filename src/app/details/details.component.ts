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
var data = [
  [1528205400000, 193.07, 193.94, 192.36, 193.31],
  [1528291800000, 100.63, 194.08, 191.92, 193.98],
  [1528378200000, 50.14, 194.2, 192.34, 193.46],
  [1528378300000, 100.63, 194.08, 191.92, 193.98],
];
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: DetailsService) { }

  Highcharts: typeof Highcharts = Highcharts;
  articles: CryptoNews[] = [];
  chartOptions: Options = {
    xAxis: {
      crosshair: true
  },
  yAxis: {
      crosshair: true
  },
  tooltip: {
  	formatter(){
      let point = this
      let open;
      let high;
      let low;
      let close;
      data.forEach(d => {
      	if(d[0] == point.x){
        	open = d[1]
          high = d[2]
          low = d[3]
          close = d[4]
        }
      })
      return `Open ${open} </br>High ${high} </br>Low ${low} </br>Close ${close} </br>`
    }
  },
    series: [
      {
        type: "line",
        pointInterval: 24 * 3600 * 1000,
        
        zones: [{
          value: 100,
          color: '#ea3943'
        }, {
          color: '#16c784'
        }],
        data: data
      }
    ]
  };
  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getCryptoNews(id).subscribe((data:any)=>{
      this.articles = data.data;
    })
    
  }

}
