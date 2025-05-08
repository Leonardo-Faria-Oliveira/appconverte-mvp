import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-success',
	imports: [CommonModule],
	template: `
    <div
      *ngIf="success"
      @slideUpDown
      class="tooltip-container"
    >
      <span class="tooltip-text">{{ message }}</span>
    </div>
  `,
	styleUrl: './success.component.scss',
	animations: [
		trigger('slideUpDown', [
			// ao inserir no DOM: começa fora da tela e sobe
			transition(':enter', [
				style({ transform: 'translateY(100%)' }),
				animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
			]),
			// ao remover do DOM: desce até sair
			transition(':leave', [
				animate('0.5s ease-in', style({ transform: 'translateY(100%)' }))
			])
		])
	]
})
export class SuccessTooltip {
	@Input() message: string = 'Sucesso!';
	@Input() success: boolean = false;
}
