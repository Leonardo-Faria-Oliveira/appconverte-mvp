import { Component } from '@angular/core';
import { PasswordInputComponent } from "../../../../ui/form/password-input/password-input.component";

@Component({
  selector: 'password-step',
  imports: [PasswordInputComponent],
  template: `
    <div class="flex flex-col gap-6">
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
    </div>  
    
  `,
})
export class PasswordComponent {

}
