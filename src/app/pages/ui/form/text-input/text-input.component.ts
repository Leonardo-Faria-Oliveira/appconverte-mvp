import { Component, forwardRef, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'base-text-input',
  imports: [InputTextModule],
  template: `
        <input 
        [id]="id"
        [type]="type" 
        [placeholder]="placeholder" 
        (focus)="isFocused = true"
        (blur)="isFocused = false"
        />
    `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent extends InputTextModule implements ControlValueAccessor{

  constructor() {
    super();
  }
  private innerValue: any = '';

  writeValue(obj: any): void {
    this.innerValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
  private isDisabled: boolean = false;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.innerValue = input.value;
    this.onChange(this.innerValue);
  }

  onBlur(): void {
    this.onTouched();
  }


  @Input() placeholder: string | undefined;

  @Input() id: string = '0';

  @Input() focusColor: string = 'var(--primary-color)';

  @Input() type: string = 'text';

  @Input() isFocused: boolean = false;
  
}
