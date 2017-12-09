import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: '',
    loadChildren: './admin/admin.module#AdminModule',
  },
  // {
  //   path: '',
  //   loadChildren: './main-layout/main-layout.module#MainLayoutModule'
  // }
];
