import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminRoutes } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/team/add-team';
import { SideNavModule } from './components/side-nav';
import { ToolbarAdminModule } from './components/toolbar-admin';
import { GuardModule } from './module/guard';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild(AdminRoutes),
    SideNavModule,
    ToolbarAdminModule,
    GuardModule,
  ],
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddTeamComponent,
  ],
})
export class AdminModule {
}
