import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

import { TableApiModule } from '@shared/service/table-api';
import { LoadingAppModule } from '@shared/module/loading-app';

import { TableRoutes } from './table.route';
import { TableViewComponent } from './table-view';
import { TableEditComponent } from './table-edit';
import { TableItemComponent } from './table-item';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TableRoutes),
    MatCardModule,
    TableApiModule,
    LoadingAppModule
  ],
  declarations: [
    TableViewComponent,
    TableEditComponent,
    TableItemComponent,
  ]
})
export class TableModule {
}
