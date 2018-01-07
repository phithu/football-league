import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamApiService } from './team-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TeamApiService]
})
export class TeamApiModule {
}
