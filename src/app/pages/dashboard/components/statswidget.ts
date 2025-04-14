import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    template: `
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Enviadas</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-check text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Abertas</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                            </div>
                            <div class="flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <span class="text-green-500" style="position: relative; display: inline-block;">
                                    <i class="pi pi-check" style="position: absolute; left: 0;"></i>
                                    <i class="pi pi-check" style="margin-left: 5px; margin-top:2px; overflow:hidden;"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Falharam</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">2</div>
                            </div>
                            <div class="flex items-center justify-center bg-red-100 dark:bg-red-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-times text-red-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Clientes</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">200</div>
                            </div>
                            <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-users text-cyan-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `,
})
export class StatsWidget { }
