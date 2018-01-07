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
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatStepperModule,
} from '@angular/material';

import { ImagesUploadModule } from '@shared/module/images-upload';
import { NotificationModule } from '@shared/module/notification';
import { ConfirmDialogModule } from '@shared/module/confirm-dialog';
import { ButtonSubmitModule } from '@shared/module/button-submit';
import { LoadingAppModule } from '@shared/module/loading-app';
import { AvatarModule } from '@shared/module/avatar';
import { RuleApiModule } from '@shared/service/rule-api';
import { TeamApiModule } from '@shared/service/team-api';

import { CardItemModule } from '../../components/card-item';
import { PlayerItemModule } from '../../components/player-item';
import { InfoTeamModule } from '../../components/info-team';
import { AddInfoTeamComponent } from './component/add-info-team';
import { AddInfoPlayerComponent } from './component/add-info-player';
import { AddInfoListPlayerComponent } from './component/add-info-list-player';
import { AddTeamComponent } from './page/add-team';
import { ViewTeamComponent } from './page/view-team';
import { EditTeamComponent } from './page/edit-team';
import { DetailTeamComponent, } from './page/detail-team';
import { EditPlayerComponent } from './page/edit-player';
import { AddPlayerComponent } from './page/add-player';
import { TeamRoutes } from './team.router';
import { GetTeamResolve } from './get-team.resolve';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeamRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ImagesUploadModule,
    NotificationModule,
    InfoTeamModule,
    RuleApiModule,
    TeamApiModule,
    CardItemModule,
    ConfirmDialogModule,
    ButtonSubmitModule,
    LoadingAppModule,
    AvatarModule,
    PlayerItemModule,
  ],
  declarations: [
    AddTeamComponent,
    ViewTeamComponent,
    AddInfoTeamComponent,
    AddInfoPlayerComponent,
    AddInfoListPlayerComponent,
    EditTeamComponent,
    EditPlayerComponent,
    DetailTeamComponent,
    AddPlayerComponent
  ],
  providers: [
    GetTeamResolve,
  ]
})
export class TeamModule {
}
