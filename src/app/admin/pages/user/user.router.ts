import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user';
import { EditUserComponent } from './edit-user';

export const UserRoutes: Routes = [
  {
    path: '',
    children: [
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
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
