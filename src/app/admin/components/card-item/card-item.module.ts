import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

import { CardItemComponent } from './card-item.component';

import { AvatarModule } from '@shared/module/avatar';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
  ],
  declarations: [
    CardItemComponent,
  ],
  exports: [
    CardItemComponent
  ]
})

export class CardItemModule {
}
