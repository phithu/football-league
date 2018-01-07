import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AccountModule } from '@shared/service/account';

import { AdminRoutes } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin';
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
    AccountModule,
    PerfectScrollbarModule
  ],
  declarations: [
    AdminComponent,
    HomeAdminComponent,
  ],
})
export class AdminModule {
}
