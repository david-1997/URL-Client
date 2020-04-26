import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http: HttpClient) { }
  postURL(data): Observable<any> {
    return this.http.post('https://url-nodejs.herokuapp.com/create', data)
  }
  getURLs(): Observable<any> {
    return this.http.get('https://url-nodejs.herokuapp.com/view')
  }
}
