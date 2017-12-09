import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AdminRoutes } from './admin.routes';
import { HomeAdminComponent } from './pages/home-admin';
import { AddTeamComponent } from './pages/team/add-team';
import { SideNavModule } from './components/side-nav';
import { ToolbarAdminModule } from './components/toolbar-admin';
import { GuardModule } from './module/guard';
import { AddUserComponent } from './pages/user/add-user';
import { ImagesUploadModule } from '../../shared/module/images-upload';
import { NotificationModule } from '../../shared/module/notification';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forChild(AdminRoutes),
    SideNavModule,
    ToolbarAdminModule,
    GuardModule,
    ImagesUploadModule,
    NotificationModule
  ],
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    AddTeamComponent,
    AddUserComponent,
  ],
})
export class AdminModule {
}
