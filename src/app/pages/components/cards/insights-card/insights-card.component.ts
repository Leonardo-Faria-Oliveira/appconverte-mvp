import { Component, Input } from '@angular/core';

@Component({
	selector: 'insights-card',
	imports: [],
	template: `

	<div class="card flex mb-0 w-full max-w-[18rem] md:max-w-[26.6rem] 2xl:max-w-[35.6rem]">
		<div class="flex justify-between w-full mb-4">
			<div>
				<span class="block text-muted-color font-medium mb-4">{{title}}</span>
				<div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{value}}</div>
			</div>
			<div [class]="'flex items-center justify-center ' + bgColor +' rounded-border'" style="width: 2.5rem; height: 2.5rem">
				<i [class]="icon+' ' + iconColor + ' !text-xl'"></i>
			</div>
		</div>
	</div>
	
  `,
})
export class InsightsCardComponent {

	@Input() title: string = 'Enviadas';
	@Input() value: number = 0;
	@Input() icon: string = 'pi pi-check ';
	@Input() iconColor: string = ' text-blue-500 ';
	@Input() bgColor: string = 'bg-blue-100 dark:bg-blue-400/10';

}
