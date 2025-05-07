import { Routes } from '@angular/router';
import { Access } from './access/access';
import { Login } from './login/login';
import { Error } from '../ui/tooltips/error/error';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';


export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword }
] as Routes;
