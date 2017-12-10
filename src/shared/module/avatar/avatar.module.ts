import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { RandomColorDirective } from '../../../app/extension/random-color.directive';


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
