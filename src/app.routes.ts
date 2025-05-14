import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Notfound } from './app/pages/notfound/notfound';
import { MakeNotification } from './app/pages/notifications/makeNotification';
import { UserEditComponent } from './app/pages/user/edit/edit.component';
import { SupportComponent } from './app/pages/support/support.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'notifications', component: MakeNotification },
            {
                path: 'user', children: [
                    { path: 'edit', component: UserEditComponent },
                ]
            },
            { path: 'support', component: SupportComponent }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
