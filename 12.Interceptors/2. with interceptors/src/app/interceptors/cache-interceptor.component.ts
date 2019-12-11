import { Component, OnInit, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cache-interceptor',
  template: `
    <p>
      cache-interceptor works!
    </p>
  `,
  styles: []
})
@Injectable()
export class CacheInterceptorComponent implements HttpInterceptor {
  private cache = new Map();

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cache.get(req.url);
    console.log('cachedResponse', cachedResponse)
    if (cachedResponse) {
      return of(cachedResponse);
    }
    return next.handle(req).pipe(
      tap(data => {
        this.cache.set(req.url, data);
      })
    );
  }
}
