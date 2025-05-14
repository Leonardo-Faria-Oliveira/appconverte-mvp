import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsCardComponent } from "../../../components/cards/insights-card/insights-card.component";
import { NotificationService } from '../../../../services/notifications/notification.service';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, InsightsCardComponent],
    template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <insights-card
        title="Enviadas"
        [value]="sent"
        icon="pi pi-check"
        iconColor="text-blue-500"
        bgColor="bg-blue-100 dark:bg-blue-400/10"></insights-card>

        <insights-card
        title="Abertas"
        [value]="opened"
        icon="pi pi-check"
        iconColor="text-green-500"
        bgColor="bg-green-100 dark:bg-green-400/10"></insights-card>

        <insights-card
        title="Falharam"
        [value]="failed"
        icon="pi pi-times"
        iconColor="text-red-500"
        bgColor="bg-red-100 dark:bg-red-400/10"></insights-card>
    </div>

    
    `,
    styles: [`
        div {
            transition: all 0.3s ease-in-out;
        }
    `]
})
export class StatsWidget {

    @Input() sent: number = 0;
    @Input() opened: number = 0;
    @Input() failed: number = 0;

    constructor(private notificationService: NotificationService) {}

    setSent(value: number): void {
        this.sent = value;
    }

    setOpened(value: number): void {
        this.opened = value;
    }

    setFailed(value: number): void {
        this.failed = value;
    }

    ngOnInit() {
        this.notificationService.getNotificationStats().then((data) => {
            this.setSent(data.sent);
            this.setOpened(data.opened);
            this.setFailed(data.failed);
        });
    }
}
