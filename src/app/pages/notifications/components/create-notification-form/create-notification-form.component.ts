import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TextInputComponent } from '../../../ui/form/text-input/text-input.component';
import { TextareaInputComponent } from '../../../ui/form/textarea-input/textarea-input.component';
import { ButtonComponent } from "../../../ui/button/button.component";

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
					type="text" 
					placeholder="Exemplo: Promoção de fim de ano chegando" 
					focusColor="var(--primary-color)" 
					>
					</base-text-input>
				</div>

				<div class="gap-2 w-full">
					<label for="content" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Conteúdo</label>
					<base-textarea 
					id="content"
					></base-textarea>
				</div>

				<div>
					<base-button></base-button>
				</div>
			</div>
		</form>
		`,
	styleUrl: './create-notification-form.component.scss'
})
export class CreateNotificationFormComponent {


	@Output() public title!: string;
	@Output() public content!: string;

	setTitle(title: object) {
		console.log(title);
		this.title = title as unknown as string;
	}

	setContent(content: object) {
		console.log(content);
		this.content = content as unknown as string;
	}

}
