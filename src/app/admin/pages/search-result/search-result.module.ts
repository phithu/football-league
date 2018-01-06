import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

import { SearchResultComponent } from './search-result.component';
import { SearchResultRoutes } from './search-result.router';
import { TeamApiModule } from '../../../../shared/service/team-api';
import { LoadingAppModule } from '../../../../shared/module/loading-app';
import { AvatarModule } from '../../../../shared/module/avatar';
import { SharePipesModule } from '../../../../shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchResultRoutes),
    MatCardModule,
    TeamApiModule,
    LoadingAppModule,
    AvatarModule,
    SharePipesModule
  ],
  declarations: [
    SearchResultComponent
  ]
})
export class SearchResultModule {
}
