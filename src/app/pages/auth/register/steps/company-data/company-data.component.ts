import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextInputComponent } from "../../../../components/form/text-input/text-input.component";
import { MediaFileInputComponent } from "../../../../components/form/media-file-input/media-file-input.component";
import { ErrorLabelComponent } from "../../../../components/form/error-label/error-label.component";

@Component({
	selector: 'company-data-step',
	imports: [TextInputComponent, MediaFileInputComponent, ErrorLabelComponent],
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
			[value]="companyName"
			(valueEmitter)="setCompanyName($event)"
            ></base-text-input>
			<error-label [condition]="this.companyName.length > 0 && !this.isCompanyNameValid" message="Nome deve possuir mais que 3 caracteres"></error-label>

        </div>
        <div>
            <label for="mediaRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Logo</label>
            <media-file-input
			[file]="companyMedia"
			(fileSelected)="setCompanyMedia($event)"
			></media-file-input>
        </div>
    </div>
    
  `,

})
export class CompanyDataComponent {
	
	@Input() public companyName!: string;

	@Input() public companyMedia!: File | null;

	public isCompanyNameValid!: boolean;

	public isButtonDisabled: boolean = true;

	@Output() public companyNameEmitter = new EventEmitter<string>();
	@Output() public companyMediaEmitter = new EventEmitter<File | null>();
	@Output() public isButtonDisabledEmitter = new EventEmitter<boolean>();

	public setButtonDisabled(_isButtonDisabled: boolean) {
		this.isButtonDisabled = _isButtonDisabled
	}

	setCompanyName(_companyName: string) {
		this.companyName = _companyName
		this.companyNameEmitter.emit(this.companyName)
		this.ValidateForm()
	}

	setCompanyMedia(_companyMedia: File | null) {
		this.companyMedia = _companyMedia
		this.companyMediaEmitter.emit(_companyMedia)
	}


	public ToggleButtonDisabled(condition: boolean) {
		this.setButtonDisabled(condition);
		this.isButtonDisabledEmitter.emit(this.isButtonDisabled)
	}

	public ValidateForm(): void {
		this.isCompanyNameValid = this.companyName.length > 2;
		this.ToggleButtonDisabled(!this.isCompanyNameValid);
	}

}
