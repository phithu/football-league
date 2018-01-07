import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { AvatarModule } from '@shared/module/avatar';

import { InfoTeamComponent } from './info-team.component';

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    InfoTeamComponent
  ],
  exports: [
    InfoTeamComponent
  ]
})
export class InfoTeamModule {
}
