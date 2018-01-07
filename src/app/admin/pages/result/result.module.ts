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
import { IMaskModule } from 'angular-imask';

import { FormBaseModule } from '@shared/module/form-base';
import { LoadingAppModule } from '@shared/module/loading-app';
import { ButtonSubmitModule } from '@shared/module/button-submit';
import { FixturesApiModule } from '@shared/service/fixtures-api';
import { TeamApiModule } from '@shared/service/team-api';
import { RuleApiModule } from '@shared/service/rule-api';
import { TableApiModule } from '@shared/service/table-api';
import { ResultApiModule } from '@shared/service/result-api';
import { NotificationModule } from '@shared/module/notification';

import { ResultRoutes } from './result.routes';
import { ViewResultComponent } from './pages/view-result';
import { CreateResultComponent } from './pages/create-result';
import { ListMatchFormComponent } from './components/list-match-form';
import { ListGoalFormComponent } from './components/list-goal-form';
import { FixturesResultRowModule } from '../../components/fixtures-result-row';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ResultRoutes),
    FormsModule,
    ReactiveFormsModule,
    Md2DatepickerModule,
    MdNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    IMaskModule,
    FormBaseModule,
    LoadingAppModule,
    ButtonSubmitModule,
    FixturesApiModule,
    TeamApiModule,
    RuleApiModule,
    TableApiModule,
    ResultApiModule,
    NotificationModule,
    FixturesResultRowModule
  ],
  declarations: [
    ViewResultComponent,
    CreateResultComponent,
    ListMatchFormComponent,
    ListGoalFormComponent,
  ]
})
export class ResultModule {
}
