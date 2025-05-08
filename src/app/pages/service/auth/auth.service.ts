import { Injectable } from '@angular/core';
import { IAuthService } from './auth.interface';
import { Login } from '../../auth/login/login';
import { User } from '../../models/user';
import { HttpClient } from '../httpClient/httpClient';
import { HttpResponse } from '../httpClient/httpResponse';
import { LoginResponse } from '../responses/loginResponse';
import { RequestError } from '../../models/error/request.error';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {


  constructor(private client: HttpClient) {}
  
  public login: (login: Login) => Promise<void> = async (login: Login) => {

    // const response = await this.client.post('/auth/login', JSON.stringify(login)) as HttpResponse;

    // const { token } = response.data as LoginResponse;

    // this.saveToken(token);

    throw new RequestError('Email ou senha inválidos')


  }


  public saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public register: (user: User) => Promise<void> = async (user: User) => {

    throw new RequestError('Email já existe');

  };

  public forgotPassword: (email: string) => Promise<void> = async (email: string) => {
  };

  public logout: () => Promise<void> = async () => {};

  
}
