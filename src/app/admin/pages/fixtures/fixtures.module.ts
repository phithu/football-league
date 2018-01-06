import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
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
import { FixturesResultRowModule } from '../../components/fixtures-result-row';
import { ButtonSubmitModule } from '../../../../shared/module/button-submit';
import { FixturesApiModule } from '../../../../shared/service/fixtures-api';
import { NotificationModule } from '../../../../shared/module/notification';
import { TeamApiModule } from '../../../../shared/service/team-api';
import { LoadingAppModule } from '../../../../shared/module/loading-app';


@NgModule({
  imports: [
    CommonModule,
    Md2DatepickerModule,
    MdNativeDateModule,
    RouterModule.forChild(FixturesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ButtonSubmitModule,
    FixturesApiModule,
    NotificationModule,
    FixturesResultRowModule,
    TeamApiModule,
    LoadingAppModule,
  ],
  declarations: [
    ViewFixturesComponent,
    FormFixturesComponent,
    CreateFixturesComponent
  ]
})
export class FixturesModule {
}
