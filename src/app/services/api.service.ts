import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: any = "http://localhost:8085/app/api/buildstrategy/";
  constructor(public httpclient: HttpClient) {

  }
  getCall(url: any) {
    console.log("in get call ----------- > " , this.baseUrl);
    console.log("00000000000000000 url " , url);
    return this.httpclient.get(this.baseUrl + url);
  }
  postCall(url: any, body: any) {
    console.log("in get call");
    return this.httpclient.post(this.baseUrl + url, body);
  }
}
