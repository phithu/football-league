import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FixturesRowComponent } from './fixtures-row.component';
import { SharePipesModule } from '../../../../shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharePipesModule
  ],
  declarations: [
    FixturesRowComponent
  ],
  exports: [
    FixturesRowComponent
  ]
})
export class FixturesRowModule {
}
