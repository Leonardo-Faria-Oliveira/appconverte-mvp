import { Component, Input } from '@angular/core';
import { ErrorTooltip } from "./error/error.component";
import { SuccessTooltip } from "./success/success.component";

@Component({
    selector: 'app-response-tooltip',
    imports: [ErrorTooltip, SuccessTooltip],
    template: `
        <app-error
        [errored]="errored"
        [message]="errorMessage"
        ></app-error>
        <app-success
        [success]="success"
        [message]="successMessage"
        ></app-success>
  `,
})
export class ResponseTooltipComponent {
	@Input() successMessage: string = 'Houve um erro inesperado.';
	@Input() errored: boolean = false;
    @Input() errorMessage: string = 'Sucesso!';
	@Input() success: boolean = false;
}
