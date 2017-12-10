import { Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin';
import { AdminComponent } from './admin.component';
import { GuardService } from './module/guard';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      },
      // {
      //   path: 'add-team',
      //   component: AddTeamComponent
      // },
      // {
      //   path: 'add-user',
      //   component: AddUserComponent
      // },
      // {
      //   path: 'edit-user',
      //   component: EditUserComponent
      // },
      {
        path: '',
        component: HomeAdminComponent,
      }
    ]
  }
];
