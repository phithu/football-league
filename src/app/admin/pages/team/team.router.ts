import { Routes } from '@angular/router';
import { AddTeamComponent } from './page/add-team';
import { ViewTeamComponent } from './page/view-team';
import { DetailTeamComponent, } from './page/detail-team';
import { EditTeamComponent } from './page/edit-team';
import { EditPlayerComponent } from './page/edit-player';
import { GetTeamResolve } from './get-team.resolve';

export const TeamRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddTeamComponent
      },
      {
        path: 'view',
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
        children: [
          {
            path: ':id',
            component: EditPlayerComponent,
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
        path: 'detail',
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
