import { Component, forwardRef, Input } from '@angular/core';
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
        (focus)="onFocus()"
        (blur)="onBlur()"
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
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() placeholder: string | undefined;
  @Input() id: string = '0';
  @Input() focusColor: string = 'var(--primary-color)';
  @Input() isFocused: boolean = false;

  value: string = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: any): void {
    this.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  onFocus(): void {
    this.isFocused = true;
    this.onTouched();
  }

  onBlur(): void {
    this.isFocused = false;
    this.onChange(this.value);
  }
}
