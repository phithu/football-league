import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    loadChildren: './main-layout/main-layout.module#MainLayoutModule'
  }
];
