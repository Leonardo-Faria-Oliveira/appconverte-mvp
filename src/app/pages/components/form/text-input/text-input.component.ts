import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'base-text-input',
  imports: [InputTextModule],
  template: `
        <input 
        [id]="id"
        [defaultValue]="value"
        (input)="onChange($event)"
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
})
export class TextInputComponent extends InputTextModule{

  constructor() {
    super();
  }

  @Input() placeholder: string | undefined;

  @Input() value: string = '';

  @Input() id: string = '0';

  @Input() focusColor: string = 'var(--primary-color)';

  @Input() type: string = 'text';

  @Input() isFocused: boolean = false;

  @Output() valueEmitter = new EventEmitter<string>();

  onChange(value: Event){
    const inputElement = value.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueEmitter.emit(this.value);
  }
  
}
