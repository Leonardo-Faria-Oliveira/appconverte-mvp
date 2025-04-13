import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'base-button',
  imports: [ButtonModule],
  template: `
        <button pButton 
        type="button" 
        [label]="label" 
        styleClass="w-full" 
        [style]="{
          background: isHovering ? hover : background,
          color: color,
          border: border,
        }"
        (mouseenter)="isHovering = true"
        (mouseleave)="isHovering = false"
        ></button>
    `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends ButtonModule {

  constructor() {
    super();
  }

  @Input() label: string = 'Enviar';

  @Input() background: string = 'var(--primary-color)';

  @Input() color: string = 'white';

  @Input() border: string = 'none';

  @Input() hover: string = 'var(--primary-color-hover)';

  @Input() isHovering: boolean = false;

}
