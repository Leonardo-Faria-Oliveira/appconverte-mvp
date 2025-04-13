import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-notifications',
  imports: [FormsModule, InputTextModule, ButtonModule, TextareaModule],
  template: `
        <div>
            <h2>Enviar notificação</h2>
            <form>
              <div class="flex mt-8">
                <div class="card flex flex-col gap-6 w-full">
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="flex flex-wrap gap-2 w-full">
                            <label for="firstname2">Firstname</label>
                            <input pInputText id="firstname2" type="text" />
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <label for="address">Address</label>
                        <textarea pTextarea id="address" rows="4"></textarea>
                    </div>

                   
                </div>
              </div>
            </form>
        </div>
    `,
  styleUrl: './notifications.component.scss'
})
export class MakeNotification {

}
