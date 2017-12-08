import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardService } from './guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GuardService
  ]
})
export class GuardModule {
}
