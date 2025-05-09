import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { UserDataComponent } from "./steps/user-data/user-data.component";
import { CompanyDataComponent } from "./steps/company-data/company-data.component";
import { PasswordComponent } from "./steps/password/password.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { RequestError } from '../../../models/error/request.error';
import { ResponseTooltipComponent } from "../../components/tooltips/response-tooltip.component";
import { BaseForm } from '../../../models/base-form.abstract';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ButtonComponent, UserDataComponent, CompanyDataComponent, PasswordComponent, ResponseTooltipComponent],
  template: `
    <div class="bg-surface-50  dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="padding: 0.3rem;">
                <span *ngIf="currentStep>1"           
                (click)="OnClick(false)"
                class="absolute cursor-pointer mt-[5.2rem] ml-8"
                >
                    <i class="pi pi-chevron-left  !text-xl"></i>
                </span>    
                <div style="box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);" class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" >
                    <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bem vindo ao AppConverte</div>
                            <span class="text-muted-color font-medium">Cadastre-se para continuar</span>
                    </div>

                    <form class="flex flex-col gap-6">

                        <ng-container [ngSwitch]="currentStep">
                            <user-data-step 
                            *ngSwitchCase="1"
                            [name]="name"
                            [email]="email"
                            (nameEmitter)="setName($event)"
                            (emailEmitter)="setEmail($event)"
                            (isButtonDisabledEmitter)="setIsButtonDisabled($event)"
                            ></user-data-step>

                            <company-data-step 
                            *ngSwitchCase="2"  
                            [companyName]="companyName"
                            [companyMedia]="companyMedia"
                            (companyNameEmitter)="setCompanyName($event)"
                            (companyMediaEmitter)="setCompanyMedia($event)"
                            (isButtonDisabledEmitter)="setIsButtonDisabled($event)"
                            ></company-data-step>

                            <password-step *ngSwitchCase="3" 
                            [password]="password"
                            (passwordEmitter)="setPassword($event)"
                            (isButtonDisabledEmitter)="setIsButtonDisabled($event)"
                            ></password-step>
                        </ng-container>

                        <base-button 
                        [isDisabled]="this.getIsButtonDisabled() || this.getIsLoading()"
                        [isLoading]="this.getIsLoading()"
                        (clickEmitter)="OnClick()" 
                        [label]="label" 
                        routerLink="/">
                        </base-button>     
                
                    </form>
                </div>
            </div>
        </div>
    </div>
    <app-response-tooltip
        [errored]="this.getErrored()"
    [errorMessage]="this.getErrorMessage()"
        [success]="this.getSuccess()"
    [successMessage]="this.successMessage"
    ></app-response-tooltip>
  `,
})

export class Register extends BaseForm {

    constructor(private readonly _service: AuthService, private router:Router) {
        super();
    }

	public email: string = '';
	public name: string = '';
	public companyName: string = '';
    public companyMedia: File | null = null;
  	public password: string = '';

    public currentStep: number = 1;

    public override successMessage: string = 'Registrado com sucesso!';

    public label: string = 'Proximo';

    public setName(_name: string) {
        this.name = _name
    }

    public setEmail(_email: string) {
        this.email = _email
    }

    public setCompanyName(_companyName: string) {
        this.companyName = _companyName
    }

    public setCompanyMedia(_companyMedia: File | null) {
        this.companyMedia = _companyMedia
    }

    public setPassword(_password: string){
        this.password = _password;
    }

    public nextStep(){
        this.setIsButtonDisabled(true);
        this.currentStep++;
    }

    public previousStep(){
        this.currentStep--;
    }

    public async OnClick(goForward: boolean = true){

        if(this.currentStep == 1 || !goForward){
            this.label = 'Próximo';
        }

        if(this.currentStep == 2){
            this.label = 'Enviar';
        }

        if(this.currentStep == 3 && goForward){

            try{

                this.setIsLoading(true);
                const user = {
                    email: this.email,
                    name: this.name,
                    companyName: this.companyName,
                    companyMedia: this.companyMedia,
                    password: this.password
                };

                await this._service.register(user)

                this.setSuccess(true);

                setTimeout(() => {
                    this.setSuccess(false);
                }, 1000);

                setTimeout(() => {
                    this.setIsLoading(false);
                    this.router.navigate(['/']);       
                }, 1500);

            }catch (error) {

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
                
            }finally{
                return;
            }

        }

        
        goForward ? this.nextStep() : this.previousStep();

    }

}
