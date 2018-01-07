import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';

import { RangeInputComponent } from './range-input.component';

@NgModule({
  imports: [
    CommonModule,
    NouisliderModule
  ],
  declarations: [
    RangeInputComponent
  ],
  exports: [
    RangeInputComponent
  ]
})
export class RangeInputModule {
}
