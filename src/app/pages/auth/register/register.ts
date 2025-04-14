import { Component } from '@angular/core';
import { TextInputComponent } from "../../ui/form/text-input/text-input.component";
import { PasswordInputComponent } from "../../ui/form/password-input/password-input.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { MediaFileInputComponent } from "../../ui/form/media-file-input/media-file-input.component";

@Component({
  selector: 'app-register',
  imports: [TextInputComponent, PasswordInputComponent, ButtonComponent, MediaFileInputComponent],
  template: `
    	<div class="bg-surface-50  dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="padding: 0.3rem;">
                    <div style="box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);" class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" >
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bem vindo ao AppConverte</div>
                            <span class="text-muted-color font-medium">Cadastre-se para continuar</span>
                        </div>

                        <div class="flex flex-col gap-6">

                            <div>
                                <label for="nameRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Nome</label>
                                <base-text-input 
                                id="nameRegister"
                                placeholder="Preencha com seu email" 
                                focusColor="var(--primary-color)"
                                ></base-text-input>
                            </div>
                            <div>
                                <label for="emailRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Email</label>
                                <base-text-input 
                                id="emailRegister"
                                type="email"
                                placeholder="Preencha com seu email" 
                                focusColor="var(--primary-color)"
                                ></base-text-input>
                            </div>

                            <div>
                                <label for="emailRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Nome da empresa</label>
                                <base-text-input 
                                id="companyNameRegister"
                                placeholder="Preencha com o nome de sua empresa" 
                                focusColor="var(--primary-color)"
                                ></base-text-input>
                            </div>

                            <div>
                                <label for="mediaRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Logo</label>
                                <media-file-input></media-file-input>
                            </div>
                            
                            <div>
                                <label for="passwordRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
                                <password-input
                                id="passwordRegister"
                                placeholder="Preencha com sua senha"
                                ></password-input>
                            </div>
                            <div>
                                <label for="confirmPasswordRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Confirmar Senha</label>
                                <password-input
                                id="confirmPasswordRegister"
                                placeholder="Confirme sua senha"
                                ></password-input>
                            </div>

                            
                            <base-button label="Enviar" routerLink="/"></base-button>     
                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `,
})
export class Register{

	email!: string;
	name !: string;
	companyName!: string;
	companyMedia!: string;
  	password!: string;

}
