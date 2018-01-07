import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomColorDirective } from '@extension/random-color.directive';

import { AvatarComponent } from './avatar.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AvatarComponent,
    RandomColorDirective
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule {
}
