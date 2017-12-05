import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/add-team';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddTeamComponent
  ]
})
export class AdminModule {
}
