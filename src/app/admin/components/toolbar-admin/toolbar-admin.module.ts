import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarAdminComponent } from './toolbar-admin.component';
import { AvatarModule } from '../../../../shared/module/avatar/avatar.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AvatarModule,
  ],
  declarations: [
    ToolbarAdminComponent
  ],
  exports: [
    ToolbarAdminComponent
  ]
})
export class ToolbarAdminModule {
}
