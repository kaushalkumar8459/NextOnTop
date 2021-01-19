import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitrepoService {
  constructor(private httpClient: HttpClient) {}

  public getdata(): Observable<any> {
    const baseurl = './assets/data/github.json';
    return this.httpClient.get<any>(baseurl);
  }
}
