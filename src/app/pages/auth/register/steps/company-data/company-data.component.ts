import { Component } from '@angular/core';
import { TextInputComponent } from "../../../../ui/form/text-input/text-input.component";
import { MediaFileInputComponent } from "../../../../ui/form/media-file-input/media-file-input.component";

@Component({
  selector: 'company-data-step',
  imports: [TextInputComponent, MediaFileInputComponent],
  template: `
    <div class="flex flex-col gap-6">
        <div>
            <label for="emailRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
              Nome da empresa
              <span class="text-red-500">*</span>
            </label>
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
    </div>
    
  `,

})
export class CompanyDataComponent {

}
