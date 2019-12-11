import { Injectable,OnInit } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs/index";
import { catchError, tap, map } from "rxjs/operators";

import {IStudent} from '../models/student';
import {IOrderBook} from '../models/orderbook';
import {IRates} from '../models/rates';
import {ILatestPrice} from '../models/latestprices';


@Injectable({
  providedIn: 'root'
})
export class ApiTestService implements OnInit {

  languages = 'http://localhost:3000/languages';
  students = 'http://localhost:3000/student';
  orderBook = 'http://localhost:3000/orderbook';
  rates = 'http://localhost:3000/rates';
  latestPrices = 'http://localhost:3000/latestprices';


  constructor(private http: HttpClient ) {}

  ngOnInit() {
    // this.getLanguages();
    // this.getStudents();
    // this.getOrderBooks();
    // this.getRates();
    // this.getLatestPrice();
  }
  getMockData(){
    return this.http.get("../../assets/data.json");
  }
  getLanguages(): Observable<any> {
    return this.http.get(this.languages).pipe(
      tap(data=>console.log('getLanguages',data)),
      catchError(this.handler)
    );
  }
  private handler(err: HttpErrorResponse){
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    return throwError(errorMessage)
  }

  getStudents(): Observable<IStudent> {
    return this.http.get<IStudent>(this.students);
  }
  getOrderBooks(): Observable<IOrderBook> {
    return this.http.get<IOrderBook>(this.orderBook);
  }
  getRates(): Observable <IRates>{
    return this.http.get<IRates>(this.rates);
  }
  getLatestPrice(): Observable <ILatestPrice> {
    return this.http.get<ILatestPrice>(this.latestPrices);
  }
}
