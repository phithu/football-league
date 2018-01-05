import { Routes } from '@angular/router';
import { ViewResultComponent } from './pages/view-result';
import { CreateResultComponent } from './pages/create-result';


export const ResultRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view-result',
        component: ViewResultComponent
      },
      {
        path: 'create-result',
        component: CreateResultComponent
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
