import { Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/add-team';
import { AdminComponent } from './admin.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'them-doi-bong',
        component: AddTeamComponent
      },
      {
        path: '',
        component: HomeAdminComponent,
      }
    ]
  }
];
