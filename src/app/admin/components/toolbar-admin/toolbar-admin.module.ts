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

import { AvatarModule } from '@shared/module/avatar';
import { TeamApiModule } from '@shared/service/team-api';

import { ToolbarAdminComponent } from './toolbar-admin.component';


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
    TeamApiModule
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
