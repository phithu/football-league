import { NgModule } from '@angular/core';
import { TypeUserPipe } from './type-user.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TypeUserPipe,
  ],
  exports: [
    TypeUserPipe
  ]
})
export class SharePipesModule {
}
