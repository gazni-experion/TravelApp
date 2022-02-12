import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) {}

  public login(login: Login) {
    return this.httpClient.post(environment.apiUrl + '/login/token', login);
  }

  public logout() {
    sessionStorage.removeItem('JwtTOKEN');
    localStorage.removeItem('USERNAME');
  }
}
