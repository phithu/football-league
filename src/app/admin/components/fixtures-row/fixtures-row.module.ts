import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FixturesRowComponent } from './fixtures-row.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
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
