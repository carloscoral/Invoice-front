import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token: Token|null;

  constructor() {
    this.token = this.recoveryToken();
  }

  private recoveryToken() {
    const rawToken = localStorage.getItem('token');
    if (rawToken) {
      try {
        return JSON.parse(rawToken);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  setToken(token: Token|null) {
    this.token = token;
    if (this.token)
      localStorage.setItem('token', JSON.stringify(this.token));
    else
      localStorage.removeItem('token');
  }
}
