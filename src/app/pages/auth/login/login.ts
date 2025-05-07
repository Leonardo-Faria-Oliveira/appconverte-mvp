import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from '../../ui/button/button.component';
import { TextInputComponent } from '../../ui/form/text-input/text-input.component';
import { PasswordInputComponent } from '../../ui/form/password-input/password-input.component';
import { AuthService } from '../../service/auth/auth.service';
import { Error } from "../../ui/tooltips/error/error";
import { CommonModule } from '@angular/common';
import { RequestError } from '../../models/error/request.error';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ButtonComponent, TextInputComponent, PasswordInputComponent, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, Error],
    template: `
        <main class="bg-surface-50 relative dark:bg-surface-950 flex items-center justify-center h-screen w-full overflow-hidden">
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
                                (valueEmitter)="setEmail($event)" 
                                id="emailLogin"
                                type="email"
                                placeholder="Preencha com seu email" 
                                ></base-text-input>
                            </div>
                            
                            <div>
                                <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
                                <password-input
                                id="passwordLogin"
                                (passwordEmitter)="setPassword($event)"
                                placeholder="Preencha com sua senha"
                                ></password-input>
                            </div>
                            
                            <a href="/auth/forgot-password" class="font-medium no-underline ml-2 text-right cursor-pointer ">Esqueci minha senha</a>
                            
                            <base-button 
                            (clickEmitter)="login()" 
                            label="Acessar" 
                            [isDisabled]="isButtonDisabled || isSubmiting" 
                            [isLoading]="isSubmiting" 
                            ></base-button>     
                            <a class="font-medium ml-2 text-center cursor-pointer underline" href="/auth/register">
                                <span >Cadastre-se agora</span>
                            </a>
                   
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <app-error
        [errored]="errored"
        [message]="errorMessage"
        ></app-error>
    `,
})
export class Login {

    constructor(private readonly _service: AuthService, private router:Router) {}

    public email: string = '';

    public password: string = '';

    public checked: boolean = false;

    public isButtonDisabled: boolean = true;
    
    public isSubmiting: boolean = false;

    public errored: boolean = false;
    public errorMessage: string = '';

    setEmail(_email: string) {
        if(this.ValidateForm()){
            this.isButtonDisabled = false;
        }else{
            this.isButtonDisabled = true;
        }
        this.email = _email;
    }

    setPassword(_password: string) {
        if(this.ValidateForm()){
            this.isButtonDisabled = false;
        }else{
            this.isButtonDisabled = true;
        }
        this.password = _password;
    }

    setErrored(_errored: boolean) {
        this.errored = _errored;
    }

    setErrorMessage(_errorMessage: string) {
        this.errorMessage = _errorMessage;
    }

    setLoading(_isLoading: boolean) {
        this.isSubmiting = _isLoading;
    }

    public async login(){
        
        try {

            this.setLoading(true);
            await this._service.login({email: this.email, password:this.password} as Login )
            setTimeout(() => {
                this.isSubmiting = false;
            }, 1000);
            // this.router.navigate(['/']);

        } catch (error) {

            setTimeout(() => {
                this.isSubmiting = false;
            }, 1000);

            if (error instanceof RequestError) {
                this.setErrored(true);
                this.setErrorMessage(error.getMessage());
                setTimeout(() => {
                    this.setErrored(false);
                }, 3000);
            }

        } 
   
    }

    public ValidateForm():boolean{
        return this.email.length > 1 && this.isEmailValid(this.email) && this.password.length > 1;
    }

    public isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
}
