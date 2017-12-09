import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarAdminComponent } from './toolbar-admin.component';
import { RandomColorDirective } from '../../../extension/random-color.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ToolbarAdminComponent,
    RandomColorDirective
  ],
  exports: [
    ToolbarAdminComponent
  ]
})
export class ToolbarAdminModule {
}
