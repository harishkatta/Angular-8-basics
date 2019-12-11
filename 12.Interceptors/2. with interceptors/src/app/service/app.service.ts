import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  // url = '../../assets/db.json'


  getData(): Observable<any> {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts/');
    return this.http.get('http://jsonplaceholder.typicode.com/posts/');
  }
}
