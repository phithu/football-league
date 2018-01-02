import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { AvatarModule } from '../../../../shared/module/avatar/avatar.module';
import { SharePipesModule } from '../../../../shared/pipes';
import { InfoTeamComponent } from './info-team.component';

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    // SharePipesModule,
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
