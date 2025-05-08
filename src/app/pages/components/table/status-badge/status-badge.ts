import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { NotificationStatus } from '../../../../models/notification';


@Component({
  selector: 'status-badge',
  imports: [CommonModule, TagModule],
  template: `
  
      <div [ngSwitch]="status" >
        <p-tag severity="success" class="p-component p-tag p-tag-success" *ngSwitchCase="'success'">aberta</p-tag>
        <span severity="danger" class="p-component p-tag p-tag-danger" *ngSwitchCase="'error'">falhou</span>
        <span severity="info" class="p-component p-tag p-tag-info" *ngSwitchCase="'sent'">enviada</span>
      </div>
     
  `,
  styleUrl: './status-badge.scss',
})
export class StatusBadgeComponent {

  @Input() status: NotificationStatus = 'sent';

}
