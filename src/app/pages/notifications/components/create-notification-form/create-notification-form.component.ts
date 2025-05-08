import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TextInputComponent } from '../../../components/form/text-input/text-input.component';
import { TextareaInputComponent } from '../../../components/form/textarea-input/textarea-input.component';
import { ButtonComponent } from "../../../components/button/button.component";
import { Notification } from '../../../../models/notification';

@Component({
	selector: 'create-notification-form',
	imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, TextInputComponent, TextareaInputComponent, ButtonComponent],
	template: `
		<form class="flex w-full">
			<div class=" flex flex-col gap-6 w-full">
				<div class="gap-2 w-full">
					<label for="title" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Título</label>
					<base-text-input 
					id="title" 
					(valueEmitter)="setTitle($event)"
					type="text" 
					placeholder="Exemplo: Promoção de fim de ano chegando" 
					focusColor="var(--primary-color)" 
					>
					</base-text-input>
				</div>

				<div class="gap-2 w-full">
					<label for="content" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Conteúdo</label>
					<base-textarea 
					(valueEmitter)="setContent($event)"
					id="content"
					></base-textarea>
				</div>

				<div>
					<base-button (clickEmitter)="OnClick()" ></base-button>
				</div>
			</div>
		</form>
		`,
})
export class CreateNotificationFormComponent {


	public title: string ='';
	public content: string = '';

	@Output() public createNotificationEmmiter = new EventEmitter<Notification>();
	@Output() public titleEmitter = new EventEmitter<string>();
	@Output() public contentEmitter = new EventEmitter<string>();


	setTitle(_title: string) {
		this.title = _title
		this.titleEmitter.emit(this.title)
	}

	setContent(_content: string) {
		this.content = _content;
		this.contentEmitter.emit(this.content)
	}

	OnClick(){
		const notification: Notification = {
			title: this.title,
			content: this.content,
		}
		this.createNotificationEmmiter.emit(notification)
	}

}
