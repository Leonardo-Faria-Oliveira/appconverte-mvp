import { Component } from '@angular/core';
import { TextInputComponent } from "../../../../ui/form/text-input/text-input.component";

@Component({
  selector: 'user-data-step',
  imports: [TextInputComponent],
      template: `
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
      </div>
        
    `,
})
export class UserDataComponent {



}
