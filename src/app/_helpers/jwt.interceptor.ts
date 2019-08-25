import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../_services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    private _URLPattern = environment.api_url + '/api';
    constructor(private authenticationService: AuthService
        ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
       console.log('intercepted', req);

        if(req.url.startsWith(this._URLPattern)){
          let token = JSON.parse(localStorage.getItem('currentUser')).token;
          //console.log('url', JSON.parse(localStorage.getItem('currentUser')).token);
        req = req.clone({
  
          setHeaders: {
  
            Authorization: `Bearer ${token}`
  
          }
  
        });
  
      }
        return next.handle(req);
    }
}