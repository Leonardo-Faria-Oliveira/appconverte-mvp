import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'error-label',
    standalone: true,
    imports: [InputTextModule, CommonModule],
    template: `
        <p *ngIf="condition" class="error-label">{{message}}</p>
    `,
    styleUrls: ['./error-label.component.scss'],

})
export class ErrorLabelComponent {

    @Input() message!: string;

    @Input() condition!: boolean;

}
