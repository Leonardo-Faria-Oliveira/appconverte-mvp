import { Component, Input } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'base-textarea',
  imports: [TextareaModule],
  template: `
        <textarea 
        pTextarea 
        [id]="id" 
        rows="4"
        [style]="{ height: '150px' }"
        ></textarea>
    `,
})
export class TextareaInputComponent {

  @Input() placeholder: string | undefined;

  @Input() id: string = '0'; 

  
}
