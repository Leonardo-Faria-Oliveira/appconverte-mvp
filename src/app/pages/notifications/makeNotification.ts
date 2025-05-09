import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CreateNotificationFormComponent } from "./components/create-notification-form/create-notification-form.component";
import { PreviewMockupComponent } from "./components/preview-mockup/preview-mockup.component";
import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notifications/notification.service';
import { ResponseTooltipComponent } from "../components/tooltips/response-tooltip.component";
import { BaseForm } from '../../models/base-form.abstract';
import { RequestError } from '../../models/error/request.error';


@Component({
	selector: 'app-notifications',
	imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, CreateNotificationFormComponent, PreviewMockupComponent, ResponseTooltipComponent],
	template: `
		<main class="w-full ">
			<h2>Enviar notificação</h2>
			<section class="card min-h-min flex flex-col md:flex-row justify-center md:justify-start gap-20">
				<create-notification-form 
				[isButtonDisabled]="this.getIsButtonDisabled()"
				[isLoading]="this.getIsLoading()"
				(createNotificationEmmiter)="makeNotification({title: title, content: content})" 
				(titleEmitter)="setTitle($event)"
				(contentEmitter)="setContent($event)"
				class="md:w-[25rem]"></create-notification-form>

				<app-preview-mockup	[title]="title" [content]="content" ></app-preview-mockup>
			</section>
		</main>
		<app-response-tooltip
		[errored]="this.getErrored()"
		[errorMessage]="this.getErrorMessage()"
		[success]="this.getSuccess()"
		[successMessage]="this.successMessage"
		>
		</app-response-tooltip>
	`,
})

export class MakeNotification extends BaseForm {

	public override successMessage: string = 'Notificação criada com sucesso!';

	constructor(private readonly _service: NotificationService) {
		super();
	}

	public title: string = ''
	public content: string = ''

	setTitle(title: string) {
		this.Validate()
		this.title = title
	}

	setContent(content: string) {
		this.Validate()
		this.content = content
	}

	public async makeNotification(notification: Notification){

		try {
			this.setIsLoading(true);

			await this._service.sendNotification(notification)

			this.setSuccess(true);
			
			setTimeout(() => {
                this.setSuccess(false);
            }, 1000);

            setTimeout(() => {
                this.setIsLoading(false);
            }, 1500);

		} catch (error) {
			

			const errMessage = error instanceof RequestError ? error.getMessage() : this.getErrorMessage();
			
			this.setErrored(true);
			this.setErrorMessage(errMessage);
			setTimeout(() => {
				this.setErrored(false);
			}, 1000);

			setTimeout(() => {
				this.setIsLoading(false);
			}, 1500);

		}

	}

	private ToggleButtonDisabled(isDisabled: boolean): void {
		this.setIsButtonDisabled(isDisabled)
	}

	private Validate(): void{
		const isTitleValid = this.title.length >= 5 && this.title.length < 50
		const isContentValid= this.content.length >= 10 && this.content.length < 300
		this.ToggleButtonDisabled(!(isTitleValid && isContentValid))
	}

}
