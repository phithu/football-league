import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { TableRoutes } from './table.route';
import { TableViewComponent } from './table-view';
import { TableEditComponent } from './table-edit';
import { TableItemComponent } from './table-item';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TableRoutes),
    MatCardModule,
  ],
  declarations: [
    TableViewComponent,
    TableEditComponent,
    TableItemComponent,
  ]
})
export class TableModule {
}
