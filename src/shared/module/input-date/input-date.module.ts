import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDateComponent } from './input-date.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [
    InputDateComponent
  ],
  exports: [
    InputDateComponent
  ]
})
export class InputDateModule {
}
