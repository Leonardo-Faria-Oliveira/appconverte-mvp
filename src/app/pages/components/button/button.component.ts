import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'base-button',
  imports: [ButtonModule, CommonModule],
  template: `
        <button pButton 
        type="button" 
        [disabled]="isDisabled"
        styleClass="w-full " 
        [style]="{
          background: isHovering ? hover : background,
          color: color,
          border: border,

        }"
        (click)="OnClick()"
        (mouseenter)="isHovering = true"
        (mouseleave)="isHovering = false"
        >
          {{ label }}
          <ng-container *ngIf="icon && isLoading">
            <i [class]="icon" class="spin" style="margin-right: 0.5rem;"></i>
          </ng-container>
        </button>
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

  @Input() isLoading: boolean = false;

  @Input() isDisabled: boolean = false;

  @Input() icon: string = 'pi pi-spinner'; // Add this input for the icon class

  @Output() clickEmitter = new EventEmitter<void>();

  OnClick() {
    this.clickEmitter.emit();
  }
}
