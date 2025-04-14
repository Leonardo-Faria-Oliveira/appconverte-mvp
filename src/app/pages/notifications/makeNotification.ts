import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TextInputComponent } from "../ui/form/text-input/text-input.component";
import { timeInterval } from 'rxjs';
import { TextareaInputComponent } from "../ui/form/textarea-input/textarea-input.component";
import { MediaFileInputComponent } from "../ui/form/media-file-input/media-file-input.component";
import { CreateNotificationFormComponent } from "./components/create-notification-form/create-notification-form.component";
import { PreviewMockupComponent } from "./components/preview-mockup/preview-mockup.component";

@Component({
  selector: 'app-notifications',
  imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, CreateNotificationFormComponent, PreviewMockupComponent],
  template: `
        <main class="w-full">
            <h2>Enviar notificação</h2>
			<section class="card min-h-min flex flex-row justify-start gap-20">
				<create-notification-form
				class="w-[25rem]"
				></create-notification-form>
				<app-preview-mockup
				[title]="title"
				[content]="content"
				></app-preview-mockup>
			</section>
		</main>
    `,
  styleUrl: './makeNotifications.scss'
})
export class MakeNotification {

  public title!: string
  public content!: string

  setTitle(title: string) {
	this.title = title
  }

  setContent(content: string) {
	this.content = content
  }

}
