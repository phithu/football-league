import { Routes } from '@angular/router';
import { TableViewComponent } from './table-view';
import { TableEditComponent } from './table-edit';

export const TableRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view',
        component: TableViewComponent
      },
      {
        path: 'edit',
        component: TableEditComponent
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
