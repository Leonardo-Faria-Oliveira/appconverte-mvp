import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from '../ui/button/button.component';
import { TextInputComponent } from '../ui/form/text-input/text-input.component';
import { PasswordInputComponent } from '../ui/form/password-input/password-input.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonComponent, TextInputComponent, PasswordInputComponent, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
    template: `
        <main class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <section class="flex flex-col items-center justify-center">
                <div style="padding: 0.3rem;">
                    <div style="box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);" class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" >
                        <div class="text-center mb-8">
                            
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bem vindo ao AppConverte</div>
                            <span class="text-muted-color font-medium">Faça login para continuar</span>
                        </div>

                        <div class="flex flex-col gap-6">
                            <div>
                                <label for="emailLogin" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Email</label>
                                <base-text-input 
                                id="emailLogin"
                                type="email"
                                placeholder="Preencha com seu email" 
                                focusColor="var(--primary-color)"
                                [(ngModel)]="email"
                                ></base-text-input>
                            </div>
                            
                            <div>
                                <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
                                <password-input
                                id="passwordLogin"
                                placeholder="Preencha com sua senha"
                                focusColor="red"
                                [(ngModel)]="password"
                                ></password-input>
                            </div>
                            
                            <a href="/auth/forgot-password" class="font-medium no-underline ml-2 text-right cursor-pointer ">Esqueci minha senha</a>
                            <!-- <div class="flex items-center justify-between mt-2 mb-8 gap-8"> -->
                                <!-- <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Lembrar me</label>
                                </div> -->
                                
                            <!-- </div> -->
                            <base-button label="Acessar" routerLink="/"></base-button>     
                            <a class="font-medium ml-2 text-center cursor-pointer underline" href="/auth/register">
                                <span >Cadastre-se agora</span>
                            </a>
                   
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `
})
export class Login {
    email: string = '';

    password: string = '';

    checked: boolean = false;
}
