import { Component } from '@angular/core';
import { StatsWidget } from './components/statswidget/statswidget';
import { NotificationsPaginationComponent } from "./components/notifications-pagination/notifications-pagination.component";

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, NotificationsPaginationComponent],
    template: `
        
        <div class="flex flex-col w-full max-w-[96rem] gap-8 ">
            
                <app-stats-widget />
                <app-notifications-pagination></app-notifications-pagination>
            
        </div>
       
    `
})
export class Dashboard {}
