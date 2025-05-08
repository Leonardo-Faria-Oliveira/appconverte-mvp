import { Component, Input } from '@angular/core';
import {
	trigger,
	transition,
	style,
	animate
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-error',
	imports: [CommonModule],
	standalone: true,
	template: `
    <div
      *ngIf="errored"
      @slideUpDown
      class="tooltip-container"
    >
      <span class="tooltip-text">{{ message }}</span>
    </div>
  `,
	styleUrls: ['./error.component.scss'],
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
export class ErrorTooltip {
	@Input() message: string = 'Houve um erro inesperado.';
	@Input() errored: boolean = false;
}
