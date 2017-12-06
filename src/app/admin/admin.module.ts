import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/add-team';
import { SideNavModule } from './components/side-nav';
import { ToolbarAdminModule } from './components/toolbar-admin';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SideNavModule,
    ToolbarAdminModule
  ],
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddTeamComponent
  ]
})
export class AdminModule {
}
