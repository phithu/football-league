import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const ProfileRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
