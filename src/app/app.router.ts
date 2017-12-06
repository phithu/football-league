import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: './main-layout/main-layout.module#MainLayoutModule'
  }
];
