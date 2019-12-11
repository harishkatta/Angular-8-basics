import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './models/IEmployee';
import { catchError, retry } from 'rxjs/operators';
import { IOrderBook } from './models/IOrderBook';
import { IRates } from './models/IRates';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = '../../assets/employee.json'
  // url = '../../assets/employee.json1'
  dbUrl = '../../assets/db.json'
  languages = "../../assets/languages.json";
  orderBookUrl = '../../assets/orderbook.json';
  ratesUrl = '../../assets/rates.json'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler)
      );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error");
  }

  getMockData(): Observable<any> {
    return this.http.get(this.dbUrl);
  }
  getLanuages(): Observable<any> {
    return this.http.get(this.languages)
  }
  getOrderBooks(): Observable<IOrderBook> {
    return this.http.get<IOrderBook>(this.orderBookUrl);
  }
  getRates(): Observable<IRates> {
    return this.http.get<IRates>(this.ratesUrl);
  }
}
