import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { FormBaseComponent } from './form-base.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormBaseComponent
  ],
  exports: [
    FormBaseComponent
  ]
})
export class FormBaseModule {
}
