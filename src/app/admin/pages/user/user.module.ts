import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';

import { UserRoutes } from './user.router';
import { AddUserComponent } from './add-user';
import { EditUserComponent } from './edit-user';
import { ImagesUploadModule } from '../../../../shared/module/images-upload';
import { NotificationModule } from '../../../../shared/module/notification';
import { UserItemModule } from '../../components/user-item';
import { ConfirmDialogModule } from '../../../../shared/module/confirm-dialog';
import { ProfileDialogModule } from '../../../../shared/module/profile-dialog';
import { FormBaseModule } from '../../../../shared/module/form-base';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ImagesUploadModule,
    NotificationModule,
    UserItemModule,
    ConfirmDialogModule,
    ProfileDialogModule,
    FormBaseModule
  ],
  declarations: [
    AddUserComponent,
    EditUserComponent,
  ],
  exports: [
    ImagesUploadModule,
    NotificationModule,
  ]
})
export class UserModule {
}
