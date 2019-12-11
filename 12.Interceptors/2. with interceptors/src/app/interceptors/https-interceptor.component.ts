import { Component, OnInit } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-https-interceptor',
  template: `
    <p>
      https-interceptor works!
    </p>
  `,
  styles: []
})
export class HttpsInterceptorComponent implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneRequest = req.clone({
      url: req.url.replace("http://", "https://")
    });

    return next.handle(cloneRequest);
  }

}
