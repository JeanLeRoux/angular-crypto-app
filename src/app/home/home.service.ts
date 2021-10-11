import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CryptoMetaService {
  private REST_API_SERVER = "https://go-crypto-backend.herokuapp.com";
  constructor(
    private http: HttpClient
  ) {}
  getCryptoMeta() {
    return this.http.get(this.REST_API_SERVER+'/CryptoMeta')
  }
}
