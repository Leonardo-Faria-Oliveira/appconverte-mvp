import { Component } from '@angular/core';
import { TextInputComponent } from "../../components/form/text-input/text-input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { RequestError } from '../../../models/error/request.error';
import { ResponseTooltipComponent } from "../../components/tooltips/response-tooltip.component";
import { BaseForm } from '../../../models/base-form.abstract';

@Component({
  selector: 'app-forgot-password',
  imports: [TextInputComponent, ButtonComponent, ResponseTooltipComponent],
  template: `
  		<main class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <section class="flex flex-col items-center justify-center">
                <div style="padding: 0.3rem;">
                    <div style="box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);" class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" >
                        <div class="text-center mb-8">
                            
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Digite seu email</div>
                            <span class="text-muted-color font-medium">Enviaremos sua senha para o email cadastrado</span>
                        </div>

                        <div class="flex flex-col gap-6">
                            <div>
                                <label for="emailLogin" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Email</label>
                                <base-text-input 
                                id="emailLogin"
                                type="email"
                                placeholder="Preencha com seu email" 
                                (valueEmitter)="setEmail($event)"
                                focusColor="var(--primary-color)"
                                ></base-text-input>
                            </div>
                            
                            <base-button 
                            label="Enviar senha" 
                            [isDisabled]="this.getIsButtonDisabled() || this.getIsLoading()"
                            [isLoading]="this.getIsLoading()"
                            (clickEmitter)="Submit()"
                            >
                            </base-button>     
                            
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

export class ForgotPassword extends BaseForm {

    constructor(private readonly _service: AuthService, private router:Router) {
        super();
    }

    public email: string = '';



    public successMessage: string = 'Senha enviada no email enviado com sucesso!';


    public setEmail(email: string) {
        this.email = email;
        this.ValidateForm();
    }

    public ToggleButtonDisabled(condition: boolean) {
        this.setIsButtonDisabled(condition);
	}

     public ValidateForm():void{
        const condition = this.email.length > 1 && this.isEmailValid(this.email);
        this.ToggleButtonDisabled(!condition);
        
    }

    public isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    public async Submit(){

        try {

            this.setIsLoading(true);
            await this._service.forgotPassword(this.email);
            
            this.setSuccess(true);

            setTimeout(() => {
                 this.setSuccess(false);
            }, 1000);

            setTimeout(() => {
                this.setIsLoading(false);
                this.router.navigate(['/auth/login']);       
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
    
}
