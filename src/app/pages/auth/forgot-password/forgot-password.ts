import { Component } from '@angular/core';
import { TextInputComponent } from "../../ui/form/text-input/text-input.component";
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
  selector: 'app-forgot-password',
  imports: [TextInputComponent, ButtonComponent],
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
                                focusColor="var(--primary-color)"
                                ></base-text-input>
                            </div>
                            
                            <base-button label="Enviar senha" routerLink="/"></base-button>     
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
  
  `,
})
export class ForgotPassword {

}
