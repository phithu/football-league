import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Md2DatepickerModule,
  MdNativeDateModule
} from 'md2';

import { FixturesRoutes } from './fixtures.routes';
import { ViewFixturesComponent } from './view-fixtures';
import { CreateFixturesComponent } from './create-fixtures';
import { FormFixturesComponent } from './create-fixtures/form-fixtures';
import { ButtonSubmitModule } from '../../../../shared/module/button-submit';
import { FixturesApiModule } from '../../../../shared/service/fixtures-api';
import { NotificationModule } from '../../../../shared/module/notification';
import { FixturesRowModule } from '../../components/fixtures-row';


@NgModule({
  imports: [
    CommonModule,
    Md2DatepickerModule,
    MdNativeDateModule,
    RouterModule.forChild(FixturesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    ButtonSubmitModule,
    FixturesApiModule,
    NotificationModule,
    FixturesRowModule
  ],
  declarations: [
    ViewFixturesComponent,
    FormFixturesComponent,
    CreateFixturesComponent
  ]
})
export class FixturesModule {
}
