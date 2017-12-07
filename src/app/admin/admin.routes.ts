import { Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/add-team';
import { AdminComponent } from './admin.component';
import { GuardService } from './module/guard';

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
        path: '',
        component: HomeAdminComponent,
      }
    ]
  }
];
