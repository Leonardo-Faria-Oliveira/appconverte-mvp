import { Component, Input } from '@angular/core';
import { NotificationStatus } from '../../../service/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'status-badge',
  imports: [CommonModule],
  template: `
  
      <div [ngSwitch]="status" >
        <span class="badge badge-success" *ngSwitchCase="'success'">aberta</span>
        <span class="badge badge-error" *ngSwitchCase="'error'">falhou</span>
        <span class="badge badge-info" *ngSwitchCase="'sent'">enviada</span>
      </div>
     
  `,
  styleUrl: './status-badge.scss',
})
export class StatusBadgeComponent {

  @Input() status: NotificationStatus = 'sent';

}
