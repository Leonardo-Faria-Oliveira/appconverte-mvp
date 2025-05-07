import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordInputComponent } from "../../../../ui/form/password-input/password-input.component";
import { CommonModule } from '@angular/common';
import { ErrorLabelComponent } from "../../../../ui/form/error-label/error-label.component";

@Component({
	selector: 'password-step',
	imports: [PasswordInputComponent, CommonModule, ErrorLabelComponent],
	template: `
	<div class="flex flex-col gap-6">
		<div>
			<label for="passwordRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
				Senha
				<span class="text-red-500">*</span>
			</label>
			<password-input
			id="passwordRegister"
			(passwordEmitter)="setPassword($event)"
			placeholder="Preencha com sua senha"
			></password-input>
			<error-label [condition]="password.length > 0 && !passwordHasValidLength" message="Senha deve ter 6 ou mais caracteres"></error-label>
			<error-label [condition]="password.length > 0 && !passwordHasUpperCase" message="Senha deve conter pelo menos uma letra maiúscula"></error-label>
			<error-label [condition]="password.length > 0 && !passwordHasLowerCase" message="Senha deve conter pelo menos uma letra minúscula"></error-label>
			<error-label [condition]="password.length > 0 && !passwordHasNumber" message="Senha deve conter pelo menos um número"></error-label>
			<error-label [condition]="password.length > 0 && !passwordHasSpecialChar" message="Senha deve conter pelo menos um caractere especial"></error-label>
		</div>
		<div>
			<label for="confirmPasswordRegister" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
				Confirmar Senha
				<span class="text-red-500">*</span>
			</label>
			<password-input
			id="confirmPasswordRegister"
			(passwordEmitter)="setConfirmPassword($event)"
			placeholder="Confirme sua senha"
			></password-input> 
			<error-label 
			[condition]="confirmPassword.length > 0 && password.length > 0 && password !== confirmPassword"
			message="As senhas não coincidem"
			></error-label>
		</div>
	</div>  
  `,
})
export class PasswordComponent {

	@Input() public password!: string;
	public confirmPassword: string = '';

	public passwordHasUpperCase!: boolean;
	public passwordHasLowerCase!: boolean;
	public passwordHasNumber!: boolean;
	public passwordHasSpecialChar!: boolean;
	public passwordHasValidLength!: boolean;

	public confirmPasswordHasUpperCase!: boolean;
	public confirmPasswordHasLowerCase!: boolean;
	public confirmPasswordHasNumber!: boolean;
	public confirmPasswordHasSpecialChar!: boolean;
	public confirmPasswordHasValidLength!: boolean;

	public isButtonDisabled: boolean = true;

	@Output() public passwordEmitter = new EventEmitter<string>();
	@Output() public isButtonDisabledEmitter = new EventEmitter<boolean>();

	public setButtonDisabled(_isButtonDisabled: boolean) {
		this.isButtonDisabled = _isButtonDisabled;
	}

	setPassword(_password: string) {
		this.password = _password;
		this.passwordEmitter.emit(this.password);
		this.ValidateForm();
	}

	setConfirmPassword(_confirmPassword: string) {
		this.confirmPassword = _confirmPassword;
		this.ValidateForm();
	}

	public ToggleButtonDisabled(condition: boolean) {
		this.setButtonDisabled(condition);
		this.isButtonDisabledEmitter.emit(this.isButtonDisabled);
	}

	public ValidateForm(): void {
		const isPasswordValid = this.PasswordValidator(this.password);
		const isConfirmPasswordValid = this.ConfirmPasswordValidator(this.confirmPassword);
		this.ToggleButtonDisabled(!(isPasswordValid && isConfirmPasswordValid && this.password === this.confirmPassword));
	}

	public PasswordValidator(password: string): boolean {
		this.passwordHasUpperCase = /[A-Z]/.test(password);
		this.passwordHasLowerCase = /[a-z]/.test(password);
		this.passwordHasNumber = /\d/.test(password);
		this.passwordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		this.passwordHasValidLength = password.length >= 6;

		return this.passwordHasUpperCase && this.passwordHasLowerCase && this.passwordHasNumber && this.passwordHasSpecialChar && this.passwordHasValidLength;
	}

	public ConfirmPasswordValidator(password: string): boolean {
		this.confirmPasswordHasUpperCase = /[A-Z]/.test(password);
		this.confirmPasswordHasLowerCase = /[a-z]/.test(password);
		this.confirmPasswordHasNumber = /\d/.test(password);
		this.confirmPasswordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		this.confirmPasswordHasValidLength = password.length >= 6;

		return this.confirmPasswordHasUpperCase && this.confirmPasswordHasLowerCase && this.confirmPasswordHasNumber && this.confirmPasswordHasSpecialChar && this.confirmPasswordHasValidLength;
	}
}
