import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
  private REST_API_SERVER = "https://go-crypto-backend.herokuapp.com";
  constructor(
    private http: HttpClient
  ) {}
  getCryptoNews(crypto: string) {
    return this.http.get(this.REST_API_SERVER+'/CryptoNews', {
      params: {
        crypto: crypto
      }})
  }
  getGraphData() {
    return this.http.get(this.REST_API_SERVER+'/CryptoChart')
  }
}
