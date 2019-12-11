import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  // url = '../../assets/db.json'


  getData(): Observable<any> {
    // additional object {observe: 'response'} will return http response
    const headers = new HttpHeaders({
      'Name': 'Harish Katt'
    });
    // const params = new HttpParams().append('age', '100');
    // // these HttpHeaders & HttpParams are immutable, during object construction only we need to give all things,
    // // if we want to append later it won't
    // params.append('x1', '1')

    // if we make it to let & it will assign later properties
    let params = new HttpParams().append('age', '100');
    params = params.append('x1', '1')

    return this.http.
      get('https://jsonplaceholder.typicode.com/posts/', { observe: 'response', headers: headers, params: params })
      .pipe(
        catchError(this.errorHandler),
        retry(3),
        tap(res => console.log(res)),
        map(res => res.body)
      );
  }
  errorHandler(error: HttpErrorResponse) {
    console.log('errorHandler', error);
    return throwError(error);
  }


}
