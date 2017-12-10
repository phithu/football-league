import { Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/team/add-team';
import { AdminComponent } from './admin.component';
import { GuardService } from './module/guard';
import { AddUserComponent } from './pages/user/add-user';
import { EditUserComponent } from './pages/user/edit-user';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'add-team',
        component: AddTeamComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'edit-user',
        component: EditUserComponent
      },
      {
        path: '',
        component: HomeAdminComponent,
      }
    ]
  }
];
