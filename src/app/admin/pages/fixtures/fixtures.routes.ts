import { Routes } from '@angular/router';

import { ViewFixturesComponent } from './view-fixtures';
import { CreateFixturesComponent } from './create-fixtures';

export const FixturesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view',
        component: ViewFixturesComponent
      },
      {
        path: 'create',
        component: CreateFixturesComponent
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
