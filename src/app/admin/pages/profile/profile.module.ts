import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './profile.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes)
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
