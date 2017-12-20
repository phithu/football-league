import { Routes } from '@angular/router';
import { AddTeamComponent } from './add-team';
import { EditTeamComponent } from './edit-team';

export const TeamRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-team',
        component: AddTeamComponent
      },
      {
        path: 'edit-team',
        component: EditTeamComponent
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
