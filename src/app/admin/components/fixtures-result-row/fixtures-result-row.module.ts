import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { SharePipesModule } from '../../../../shared/pipes';
import { FixturesResultRowComponent } from './fixtures-result-row.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharePipesModule
  ],
  declarations: [
    FixturesResultRowComponent
  ],
  exports: [
    FixturesResultRowComponent
  ]
})
export class FixturesResultRowModule {
}
