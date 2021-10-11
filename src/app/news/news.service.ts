import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  private REST_API_SERVER = "https://go-crypto-backend.herokuapp.com";
  constructor(
    private http: HttpClient
  ) {}
  getCryptoNews() {
    return this.http.get(this.REST_API_SERVER+'/CryptoNews')
  }
}
