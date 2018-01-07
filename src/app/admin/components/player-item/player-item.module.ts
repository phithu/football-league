import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AvatarModule } from '@shared/module/avatar';
import { SharePipesModule } from '@shared/pipes';

import { PlayerItemComponent } from './player-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
    SharePipesModule
  ],
  declarations: [
    PlayerItemComponent
  ],
  exports: [
    PlayerItemComponent
  ]
})
export class PlayerItemModule {
}
