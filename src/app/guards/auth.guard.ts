import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot): Promise<boolean | UrlTree>
  {
    const token = this.tokenService.token;
    if(!route.data['public'] && !token || route.data['public'] && token) {
      if (route.data['redirect']) {
        this.router.navigate(route.data['redirect']);
      }
      return false;
    }
    return true;
  }
}
