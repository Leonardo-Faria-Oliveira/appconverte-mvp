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

@Component({
  selector: 'app-notifications',
  imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule, CreateNotificationFormComponent],
  template: `
        <main class="w-full">
            <h2>Enviar notificação</h2>
			<section class="card min-h-min flex flex-row justify-start gap-20">
				<create-notification-form></create-notification-form>
				<div class="h-full" >
					<div >
						<img src="../../../assets/images/mockup.png" alt="cellphone-mockup" />
						<div>
							<img src="../../../assets/images/favicon_icon.png" alt="notification-media"/>
							<div>
								<h5>{{title}}</h5>
								<p>{{content}}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
    `,
  styleUrl: './makeNotifications.scss'
})
export class MakeNotification {

  public title: string = 'Promoção de fim de ano chegando';
  public content: string = 'Aproveite nossas ofertas de fim de ano!';
  public media: string = '';

}
