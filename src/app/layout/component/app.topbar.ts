import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { TableModule } from 'primeng/table';
import { Popover, PopoverModule } from 'primeng/popover';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-topbar',
    imports: [RouterModule, CommonModule, StyleClassModule, TableModule, OverlayPanelModule, PopoverModule],
    standalone: true,
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container"> 
            <a class="layout-topbar-logo" routerLink="/">
               <img src="assets/images/appconverte.png" alt="appconverte" />
            </a>
        </div>
 
        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <!-- <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button> -->
               
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-bell"></i>
                        <span>Messages</span>
                    </button> -->
                    <button type="button" (click)="toggleProfileOptions(profileOptions, $event)" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                    <p-popover #profileOptions id="overlay_profile" [style]="{ width: '250px'  }">
                        <ul class="flex flex-col ">
                            <li class=" cursor-pointer text-lg w-full py-2 px-4 h-full hover:bg-slate-100">
                                <a href="#edit">
                                    <i class="pi pi-user mr-2"></i>
                                    Editar dados
                                </a>
                            </li>
                            <li class="cursor-pointer text-lg py-2 px-4 hover:bg-slate-100">
                                <a href="#suporte">
                                    <i class="pi pi-cog mr-2"></i>
                                    Suporte
                                </a>
                            </li>
                            <li class="cursor-pointer text-lg py-2 px-4 hover:bg-slate-100 dark:hover:bg-[#27272a]"  (click)="logout()">
                                <i class="pi pi-sign-out mr-2"></i>
                                Sair
                            </li>
                        </ul>
                    </p-popover>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService, public _authService: AuthService, public router:Router){}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    toggleProfileOptions(op: Popover, event: Event) {
        op.toggle(event);
    }

    public logout() {
        this._authService.logout().then(() => {
            sessionStorage.removeItem('token');
        });
        this.router.navigate(['/auth/login']);
    }

}
