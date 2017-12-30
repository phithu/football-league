import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './profile.router';
import { ProfileResolve } from './profile.resolve';
import { ViewInfoComponent } from './view-info';
import { UpdateInfoComponent } from './update-info';
import { ChangePasswordComponent } from './change-password';
import { AvatarModule } from '../../../../shared/module/avatar';
import { SharePipesModule } from '../../../../shared/pipes';
import { ImagesUploadModule } from '../../../../shared/module/images-upload';
import { NotificationModule } from '../../../../shared/module/notification';
import { ButtonSubmitModule } from '../../../../shared/module/button-submit';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    AvatarModule,
    MatButtonModule,
    SharePipesModule,
    ImagesUploadModule,
    NotificationModule,
    ButtonSubmitModule,
  ],
  declarations: [
    ProfileComponent,
    ViewInfoComponent,
    UpdateInfoComponent,
    ChangePasswordComponent
  ],
  providers: [
    ProfileResolve,
  ]
})
export class ProfileModule {
}
