import { Routes } from '@angular/router';
import { AddTeamComponent } from './page/add-team';
import { ViewTeamComponent } from './page/view-team';
import { EditTeamComponent } from './page/edit-team';
import { EditPlayerComponent } from './page/edit-player';
import { GetTeamResolve } from './get-team.resolve';
import { DetailTeamComponent } from './page/detail-team';
import { AddPlayerComponent } from './page/add-player';

export const TeamRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-team',
        component: AddTeamComponent
      },
      {
        path: 'add-player',
        component: AddPlayerComponent
      },
      {
        path: 'view-team',
        component: ViewTeamComponent
      },
      {
        path: 'edit-team',
        children: [
          {
            path: ':id',
            component: EditTeamComponent,
            resolve: {
              data: GetTeamResolve
            }
          },
          {
            path: '',
            redirectTo: '/',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'edit-player',
        component: EditPlayerComponent,
      },
      {
        path: 'detail-team',
        children: [
          {
            path: ':id',
            component: DetailTeamComponent,
            resolve: {
              data: GetTeamResolve
            }
          },
          {
            path: '',
            redirectTo: '/',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
