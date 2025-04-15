import { Injectable } from '@angular/core';
import { IAuthService } from './auth.interface';
import { Login } from '../../auth/login';
import { User } from '../../models/user';
import { HttpClient } from '../httpClient/httpClient';
import { HttpResponse } from '../httpClient/httpResponse';
import { LoginResponse } from '../responses/loginResponse';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {


  constructor(private client: HttpClient) {}
  
  public login: (login: Login) => Promise<void> = async (login: Login) => {

    const response = await this.client.post('/auth/login', JSON.stringify(login)) as HttpResponse;

    const { token } = response.data as LoginResponse;

    this.saveToken(token);

  }


  public saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public register: (user: User) => Promise<void> = async (user: User) => {
  };

  public forgotPassword: (email: string) => Promise<void> = async (email: string) => {
  };

  public logout: () => Promise<void> = async () => {};

  
}
