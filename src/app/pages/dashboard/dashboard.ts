import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { NotificationsPaginationComponent } from "./components/notifications-pagination/notifications-pagination.component";

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, NotificationsPaginationComponent],
    template: `
        
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="w-full col-span-full">
                <app-notifications-pagination></app-notifications-pagination>
            </div>
            
        </div>
       
    `
})
export class Dashboard {}
