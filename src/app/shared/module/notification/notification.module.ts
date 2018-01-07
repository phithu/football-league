import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SnotifyModule,
  SnotifyService,
  ToastDefaults
} from 'ng-snotify';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule,
    SnotifyModule
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ],
  providers: [
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ]
})
export class NotificationModule {
}
