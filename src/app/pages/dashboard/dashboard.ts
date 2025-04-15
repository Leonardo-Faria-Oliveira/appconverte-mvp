import { Component } from '@angular/core';
import { StatsWidget } from './components/statswidget/statswidget';
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
