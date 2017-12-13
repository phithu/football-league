import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolve } from './profile.resolve';

export const ProfileRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: ProfileComponent,
        pathMatch: 'full',
        resolve: {
          data: ProfileResolve
        }
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
