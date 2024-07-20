import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request Interceptor', req);
    if (req.method === 'POST') {
      const newRequest = req.clone({ headers: new HttpHeaders({ 'token': 'token value' }) });
      return handler.handle(newRequest);
    }
    return handler.handle(req);
  }
}