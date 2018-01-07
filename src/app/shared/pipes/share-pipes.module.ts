import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeUserPipe } from './type-user.pipe';
import { TypePlayerPipe } from './type-player.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TypeUserPipe,
    TypePlayerPipe,
    FormatDatePipe
  ],
  exports: [
    TypeUserPipe,
    TypePlayerPipe,
    FormatDatePipe
  ]
})
export class SharePipesModule {
}
