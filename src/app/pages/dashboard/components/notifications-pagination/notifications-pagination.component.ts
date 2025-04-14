import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Notification, NotificationService, NotificationStatus } from '../../../service/notification.service';
import { StatusBadgeComponent } from "../../../ui/table/status-badge/status-badge";

export interface NotificationViewModel {
	id?: string;
	title?: string;
	content?: string;
	status?: NotificationStatus;
	date?: string;
  
  }
  

@Component({
  selector: 'app-notifications-pagination',
  imports: [TableModule, CommonModule, StatusBadgeComponent],
  template:` 
          <div class="card !mb-8">
			<div class="font-semibold text-xl mb-4">Últimas notificações</div>
			<p-table [loading]="false"  [totalRecords]="notifications.length" [value]="notifications" [paginator]="true" [rows]="5" responsiveLayout="scroll">
				<ng-template #header>
					<tr>
						<th pSortableColumn="title">Título <p-sortIcon field="title"></p-sortIcon></th>
						<th pSortableColumn="content">Conteúdo <p-sortIcon field="content"></p-sortIcon></th>
						<th>Status <p-sortIcon field="status"></p-sortIcon></th>
						<th pSortableColumn="date">Data <p-sortIcon field="date"></p-sortIcon></th>
					</tr>
				</ng-template>

				<ng-template #emptymessage>	
					<tr>
						<td colspan="3" class="text-center text-muted-color font-medium">Nenhuma notificação encontrada</td>
					</tr>
				</ng-template>

				<ng-template #body let-notification>
					<tr>
						<td style="width: 25%; min-width: 5rem;">{{ notification.title }}</td>
						<td style="width: 45%; min-width: 7rem;">{{ notification.content }}</td>
						<td style="width: 35%; min-width: 8rem;">
							<status-badge
							[status]="notification.status"
							></status-badge>
						</td>
						<td style="width: 35%; min-width: 8rem;">{{ notification.date }}</td>
					</tr>
				</ng-template>
			</p-table>
		</div>
          `,
  styleUrl: './notifications-pagination.component.scss'
})


export class NotificationsPaginationComponent {
	notifications!: NotificationViewModel[];
	constructor(private notificationService: NotificationService) {}

	ngOnInit() {

		this.notificationService.getNotifications().then((data) => {

			let unMappedNotifications = data

			this.notifications = unMappedNotifications.map(notification => this.mapper(notification))
		});
	}

	mapper(notification: Notification) : NotificationViewModel{
		return {
			...notification,
			date: this.formatDate(notification.date!),
		}
	}

	formatDate(date: Date): string {

		
		return date.toLocaleDateString('pt-BR')

	}
}
