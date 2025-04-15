import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'password-input',
  imports: [PasswordModule],
  template: `
        <p-password
        [id]="id"
        [toggleMask]="true"
        styleClass="w-full"
        [feedback]="false"
        [placeholder]="placeholder"
        (input)="onChange($event)"
        >
        </p-password>
    `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ],
})
export class PasswordInputComponent {
  @Input() placeholder: string | undefined;
  @Input() id: string = '0';
  @Input() focusColor: string = 'var(--primary-color)';
  @Input() isFocused: boolean = false;

  password: string = '';

  @Output() passwordEmitter = new EventEmitter<string>();

  onChange(value: Event) {
    const inputElement = value.target as HTMLInputElement;
    this.password = inputElement.value;
    this.passwordEmitter.emit(this.password);
  }
}
