import { Component } from '@angular/core';
import { TextInputComponent } from "../../ui/form/text-input/text-input.component";
import { PasswordInputComponent } from "../../ui/form/password-input/password-input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { MediaFileInputComponent } from "../../ui/form/media-file-input/media-file-input.component";
import { UserDataComponent } from "./steps/user-data/user-data.component";
import { CompanyDataComponent } from "./steps/company-data/company-data.component";
import { PasswordComponent } from "./steps/password/password.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ButtonComponent, UserDataComponent, CompanyDataComponent, PasswordComponent],
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
                                <company-data-step *ngSwitchCase="2"  ></company-data-step>
                                <password-step *ngSwitchCase="3" ></password-step>
                            </ng-container>

                            <base-button 
                            [isDisabled]="isButtonDisabled || isSubmiting"
                            [isLoading]="isSubmiting"
                            (clickEmitter)="OnClick()" 
                            [label]="label" 
                            routerLink="/">
                            </base-button>     
                   
                        </form>
                    </div>
                </div>
            </div>
        </div>
  `,
})
export class Register{

	email: string = '';
	name: string = '';
	companyName!: string;
	companyMedia!: string;
  	password!: string;

    public currentStep: number = 1;

    public label: string = 'Proximo';

    public isSubmiting: boolean = false;

    public isButtonDisabled: boolean = true;

    setName(_name: string) {
        this.name = _name
    }

    setEmail(_email: string) {
        this.email = _email
    }

    setIsButtonDisabled(_isButtonDisabled: boolean) {
        this.isButtonDisabled = _isButtonDisabled
    }

    public setPassword(_password: string){
        this.password = _password;
    }

    public nextStep(){
        this.currentStep++;
    }

    public previousStep(){
        this.currentStep--;
    }

    public OnClick(goForward: boolean = true){

        if(this.currentStep == 2){
            this.label = 'Enviar';
        }

        if(this.currentStep == 3){

            //submit
            this.isSubmiting = true;
            setTimeout(() => {
                this.isSubmiting = false;
            }, 1000);

            return;
        }

        goForward ? this.nextStep() : this.previousStep();

    }

}
