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
  MatStepperModule
} from '@angular/material';

import { AddTeamComponent } from './add-team';
import { TeamRoutes } from './team.router';
import { EditTeamComponent } from './edit-team';
import { ImagesUploadModule } from '../../../../shared/module/images-upload';
import { NotificationModule } from '../../../../shared/module/notification';
import { AddInfoTeamComponent } from './add-team/add-info-team';
import { AddInfoPlayerComponent } from './add-team/add-info-player';
import { AddInfoListPlayerComponent } from './add-team/add-info-list-player';
import { InfoTeamModule } from '../../components/info-team';

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
    InfoTeamModule
  ],
  declarations: [
    AddTeamComponent,
    EditTeamComponent,
    AddInfoTeamComponent,
    AddInfoPlayerComponent,
    AddInfoListPlayerComponent,
  ]
})
export class TeamModule {
}