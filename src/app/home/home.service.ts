import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private REST_API_SERVER = "http://localhost:8000";
  constructor(
    private http: HttpClient
  ) {}
  getCryptoMeta() {
    return this.http.get(this.REST_API_SERVER+'/CryptoMeta')
  }
}
