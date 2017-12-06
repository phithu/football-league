import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FormBaseModule } from '../../shared/module/form-base';
import { LoginRoutes } from './login.router';
import { AuthModule } from '../../shared/service/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormBaseModule,
    MatIconModule,
    AuthModule,
    RouterModule.forChild(LoginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
