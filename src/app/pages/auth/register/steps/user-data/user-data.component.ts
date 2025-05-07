import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextInputComponent } from "../../../../ui/form/text-input/text-input.component";

@Component({
  selector: 'user-data-step',
  imports: [TextInputComponent],
      template: `
      <div class="flex flex-col gap-6">
            <div>
                <label for="nameRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
                    Nome
                    <span class="text-red-500">*</span>
                </label>
                <base-text-input 
                id="nameRegister"
                [value]="name"
                placeholder="Preencha com seu nome completo" 
                focusColor="var(--primary-color)"
                (valueEmitter)="setName($event)" 
                ></base-text-input>
            </div>
            <div>
                <label for="emailRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
                    Email
                    <span class="text-red-500">*</span>
                </label>
                <base-text-input 
                id="emailRegister"
                type="email"
                [value]="email"
                placeholder="Preencha com seu email" 
                focusColor="var(--primary-color)"
                type="email"
                (valueEmitter)="setEmail($event)" 
                ></base-text-input>
            </div>
      </div>
        
    `,
})
export class UserDataComponent {

    @Input() public name!:string;
    @Input() public email!: string;

    public isButtonDisabled: boolean = true;

    @Output() public nameEmitter = new EventEmitter<string>();
    @Output() public emailEmitter = new EventEmitter<string>();
    @Output() public isButtonDisabledEmitter = new EventEmitter<boolean>();

    public setButtonDisabled(_isButtonDisabled: boolean) {
        this.isButtonDisabled = _isButtonDisabled
    }

    setName(_name: string) {
        this.name = _name
        this.nameEmitter.emit(this.name)
        this.ValidateForm()
    }

    setEmail(_email: string) {
        this.email = _email
        this.emailEmitter.emit(this.email)
        this.ValidateForm()
    }

    public ToggleButtonDisabled(condition: boolean) {
        this.setButtonDisabled(condition);
        this.isButtonDisabledEmitter.emit(this.isButtonDisabled)
    }
    
    public ValidateForm(): void {
        const isNameValid = this.name.length > 5;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
        this.ToggleButtonDisabled(!(isNameValid && isEmailValid));
    }



}
