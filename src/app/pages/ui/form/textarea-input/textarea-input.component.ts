import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'base-textarea',
  imports: [TextareaModule],
  template: `
        <textarea 
        pTextarea 
        [id]="id" 
        [defaultValue]="value"
        rows="4"
        (input)="onChange($event)"
        [style]="{ height: '150px' }"
        ></textarea>
    `,
})
export class TextareaInputComponent {

  @Input() placeholder: string | undefined;

  @Input() id: string = '0'; 

  @Output() valueEmitter = new EventEmitter<string>();
  
  public value: string = '';

  onChange(value: Event){
    const inputElement = value.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueEmitter.emit(this.value);
  }
}


