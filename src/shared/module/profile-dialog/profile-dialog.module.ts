import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';
import { ProfileDialogComponent } from './profile-dialog.component';
import { AvatarModule } from '../avatar/avatar.module';
import { SharePipesModule } from '../../pipes';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    AvatarModule,
    SharePipesModule,
  ],
  declarations: [
    ProfileDialogComponent,
  ],
  exports: [
    ProfileDialogComponent
  ],
  entryComponents: [
    ProfileDialogComponent
  ]
})
export class ProfileDialogModule {
}
