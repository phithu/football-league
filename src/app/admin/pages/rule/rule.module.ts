import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import { RuleApiModule } from '@shared/service/rule-api';
import { NotificationModule } from '@shared/module/notification';
import { FormBaseModule } from '@shared/module/form-base';
import { LoadingAppModule } from '@shared/module/loading-app';
import { WidgetModule } from '@shared/module/widget';
import { RangeInputModule } from '@shared/module/range-input';

import { RuleRoutes } from './rule.router';
import { RuleComponent } from './rule.component';
import { RulePlayerComponent } from './rule-player';
import { RulePointComponent } from './rule-point';
import { RuleGoalComponent } from './rule-goal';
import { RuleGoalControlComponent } from './rule-goal/rule-goal-control';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(RuleRoutes),
    PerfectScrollbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    WidgetModule,
    MatSliderModule,
    RangeInputModule,
    RuleApiModule,
    NotificationModule,
    FormBaseModule,
    LoadingAppModule
  ],
  declarations: [
    RuleComponent,
    RulePlayerComponent,
    RulePointComponent,
    RuleGoalComponent,
    RuleGoalControlComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class RuleModule {
}
