import { Component } from '@angular/core';
import { TextInputComponent } from "../../ui/form/text-input/text-input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { AuthService } from '../../service/auth/auth.service';
import { ErrorTooltip } from "../../ui/tooltips/error/error.component";
import { Router } from '@angular/router';
import { RequestError } from '../../models/error/request.error';
import { SuccessTooltip } from "../../ui/tooltips/success/success.component";
import { ResponseTooltipComponent } from "../../ui/tooltips/response-tooltip.component";

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
                            [isDisabled]="isButtonDisabled || isSubmiting"
                            [isLoading]="isSubmiting"
                            (clickEmitter)="Submit()"
                            >
                            </base-button>     
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <app-response-tooltip
         [errored]="errored"
        [errorMessage]="errorMessage"
         [success]="success"
        [successMessage]="successMessage"
        ></app-response-tooltip>
  
  `,
})

export class ForgotPassword {

    constructor(private readonly _service: AuthService, private router:Router) {}

    public email: string = '';

    public isButtonDisabled: boolean = true;

    public isSubmiting: boolean = false;

    public setErrored(_errored: boolean) {
        this.errored = _errored;
    }

    public setErrorMessage(_errorMessage: string) {
        this.errorMessage = _errorMessage;
    }


    public errored: boolean = false;
    public errorMessage: string = '';

    public success: boolean = false;
    public successMessage: string = 'Senha enviada no email enviado com sucesso!';

    public setButtonDisabled(isButtonDisabled: boolean) {
        this.isButtonDisabled = isButtonDisabled;
    }

    public setIsSubmiting(isSubmiting: boolean) {
        this.isSubmiting = isSubmiting;
    }

    public setEmail(email: string) {
        this.email = email;
        this.ValidateForm();
    }

    public ToggleButtonDisabled(condition: boolean) {
        this.setButtonDisabled(condition);
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

            this.setIsSubmiting(true);
            await this._service.forgotPassword(this.email);
            
            this.success = true;

            setTimeout(() => {
                this.success = false;
            }, 1000);

            setTimeout(() => {
                this.isSubmiting = false;
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
                this.isSubmiting = false;
            }, 1500);


        }         


    }
    
}
