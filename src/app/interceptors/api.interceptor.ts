import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token.service';
import { publicApi } from '../constants/public-api';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) {}

  addHostToRequest(request: HttpRequest<any>) {
    return request.clone({
      url: `${environment.apiHost}${request.url}`
    });
  }

  addAuthorizationToRequest(request: HttpRequest<any>) {
    const token = this.tokenService.token;
    if (!publicApi.includes(request.url) && token) {
      return request.clone({
        headers: request.headers.append('Authorization', `${token.type} ${token.token}`)
      });
    }
    return request;
  } 

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authRequest = this.addAuthorizationToRequest(request);
    const requestWithHost = this.addHostToRequest(authRequest);
    return next.handle(requestWithHost);
  }
}
