import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ButtonSubmitComponent } from './button-submit.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ButtonSubmitComponent
  ],
  exports: [
    ButtonSubmitComponent
  ]
})
export class ButtonSubmitModule {
}
