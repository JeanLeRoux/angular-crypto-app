import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class NewsService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}
  getCryptoMeta() {
      let cryptoMeta;
      let value = this.http.get("http://localhost:8000/CryptoMeta");
      value.subscribe((data:any) => {
        cryptoMeta = data})
        console.log(cryptoMeta)  
        return cryptoMeta;
  }
}
