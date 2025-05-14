import { Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { MakeNotification } from './notifications/makeNotification';
import { UserEditComponent } from './user/edit/edit.component';
import { SupportComponent } from './support/support.component';

export default [
    { path: 'notifications', component: MakeNotification },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'support', component: SupportComponent },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
