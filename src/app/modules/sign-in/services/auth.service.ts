import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiUrl } from 'src/app/constants/api-url';
import { Credentials } from 'src/app/models/credentials';
import { RequestStatus } from 'src/app/models/request-status';
import { Token } from 'src/app/models/token';
import { TokenService } from 'src/app/services/token.service';

@Injectable()
export class AuthService {

  signInStatus: RequestStatus = RequestStatus.success();

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  async signIn(credentials: Credentials): Promise<boolean> {
    try {
      this.signInStatus = RequestStatus.loading();
      const result = await firstValueFrom(this.httpClient.post<Token>(ApiUrl.signIn, credentials));
      this.tokenService.setToken(result);
      this.signInStatus = RequestStatus.success();
      return true;
    } catch (e: any) {
      if (e.status === 401) {
        this.signInStatus = RequestStatus.error('Usuario o contraseña incorrectos.');  
      } else {
        this.signInStatus = RequestStatus.error('Ha ocurrido un error. Intenta nuevamente.');
      }
      this.tokenService.setToken(null);
      return false;
    }
  }
}
