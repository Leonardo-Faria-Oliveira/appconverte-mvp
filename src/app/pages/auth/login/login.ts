import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ButtonComponent } from '../../components/button/button.component';
import { TextInputComponent } from '../../components/form/text-input/text-input.component';
import { PasswordInputComponent } from '../../components/form/password-input/password-input.component';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { RequestError } from '../../../models/error/request.error';
import { ResponseTooltipComponent } from "../../components/tooltips/response-tooltip.component";
import { BaseForm } from '../../../models/base-form.abstract';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ButtonComponent, TextInputComponent, PasswordInputComponent, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, ResponseTooltipComponent],
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
                            (clickEmitter)="Submit()" 
                            label="Acessar" 
                            [isDisabled]="this.getIsButtonDisabled() || this.getIsLoading()" 
                            [isLoading]="this.getIsLoading()" 
                            ></base-button>     
                            <a class="font-medium ml-2 text-center cursor-pointer underline" href="/auth/register">
                                <span >Cadastre-se agora</span>
                            </a>
                   
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <app-response-tooltip
         [errored]="this.getErrored()"
        [errorMessage]="this.getErrorMessage()"
         [success]="this.getSuccess()"
        [successMessage]="this.successMessage"
        ></app-response-tooltip>
    `,
})
export class Login extends BaseForm {

    constructor(private readonly _service: AuthService, private router:Router) {
        super();
    }

    public email: string = '';

    public password: string = '';

    public checked: boolean = false;

    public successMessage: string = 'Logado com sucesso!';

    setEmail(_email: string) {
        if(this.ValidateForm()){
            this.setIsButtonDisabled(false);
        }else{
            this.setIsButtonDisabled(true);
        }
        this.email = _email;
    }

    setPassword(_password: string) {
        if(this.ValidateForm()){
            this.setIsButtonDisabled(false);
        }else{
            this.setIsButtonDisabled(true);
        }
        this.password = _password;
    }



    public async Submit(){
        
        try {

            this.setIsLoading(true);
            await this._service.login({email: this.email, password:this.password} as Login )
           
            this.setSuccess(true);

            setTimeout(() => {
                this.setSuccess(false);
            }, 1000);

            setTimeout(() => {
                this.setIsLoading(false);
                this.router.navigate(['/']);       
            }, 1500);

        } catch (error) {

            if (error instanceof RequestError) {
                this.setErrored(true);
                this.setErrorMessage(error.getMessage());
                setTimeout(() => {
                    this.setErrored(false);
                }, 1000);
            }

            setTimeout(() => {
                this.setIsLoading(false);
            }, 1500);

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
