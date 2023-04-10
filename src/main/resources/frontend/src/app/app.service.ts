import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private base_url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  hello() :Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get(`${this.base_url}/home`,
      {headers, responseType: 'text'});
  }
}
