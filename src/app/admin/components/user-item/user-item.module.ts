import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

import { UserItemComponent } from './user-item.component';

import { AvatarModule } from '../../../../shared/module/avatar';
import { SharePipesModule } from '../../../../shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
    SharePipesModule
  ],
  declarations: [
    UserItemComponent,
  ],
  exports: [
    UserItemComponent
  ]
})

export class UserItemModule {
}
