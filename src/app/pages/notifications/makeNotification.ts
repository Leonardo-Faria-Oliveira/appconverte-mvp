import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CreateNotificationFormComponent } from "./components/create-notification-form/create-notification-form.component";
import { PreviewMockupComponent } from "./components/preview-mockup/preview-mockup.component";
import { Notification } from '../models/notification';
import { INotificationService } from '../service/notifications/notification.interface';
import { NotificationService } from '../service/notifications/notification.service';

@Component({
	selector: 'app-notifications',
	imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, CreateNotificationFormComponent, PreviewMockupComponent],
	template: `
		<main class="w-full">
			<h2>Enviar notificação</h2>
			<section class="card min-h-min flex flex-row justify-start gap-20">
				<create-notification-form 
				(createNotificationEmmiter)="makeNotification({title: title, content: content})" 
				(titleEmitter)="setTitle($event)"
				(contentEmitter)="setContent($event)"
				class="w-[25rem]"></create-notification-form>
				<app-preview-mockup	[title]="title" [content]="content" ></app-preview-mockup>
			</section>
		</main>
	`,
})

export class MakeNotification {

	constructor(private readonly _service: NotificationService) {}

	public title!: string
	public content!: string

	setTitle(title: string) {
		this.title = title
	}

	setContent(content: string) {
		this.content = content
	}

	public async makeNotification(notification: Notification){

		try {
			
			this.Validate(notification)

			const response = await this._service.sendNotification(notification)

		} catch (error) {
			console.log(error)
		}

	}

	private Validate(notification: Notification): void{

		if(!notification.title || !notification.content){
			throw new Error('Preencha todos os campos')
		}

		if(notification.title == '' || notification.content == ''){
			throw new Error('Preencha todos os campos')
		}

		if(notification.title.length > 50){
			throw new Error('Título muito longo')
		}

		if(notification.content.length > 300){
			throw new Error('Conteúdo muito longo')
		}
		
		

	}

}
