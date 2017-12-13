import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/switchMap';

import { AccountService } from '../../../../../shared/service/account';
import {
  ConfirmDialogComponent,
  ConfirmDialogService
} from '../../../../../shared/module/confirm-dialog';
import { NotificationComponent } from '../../../../../shared/module/notification';
import { AuthService } from '../../../../../shared/service/auth';
import { ProfileDialogComponent } from '../../../../../shared/module/profile-dialog';
import { TitleAppService } from '../../../../../shared/module/title-app';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public listUser: Array<any>;
  public userIDCurrent: string;
  @ViewChild('notification') notification: NotificationComponent;

  constructor(private accountService: AccountService,
              private authService: AuthService,
              private titleAppService: TitleAppService,
              private confirmDialogService: ConfirmDialogService,
              private dialog: MatDialog) {
  }

  public ngOnInit() {
    this.getAllUsers();
    this.userIDCurrent = this.authService.getUserID();
    this.titleAppService.setTitle('Chỉnh sửa người dùng');
  }

  public getAllUsers() {
    this.accountService.getAllUsers()
      .subscribe((response) => {
        if (response.result) {
          this.listUser = response.data;
        }
      });
  }

  public deleteUser(user: any) {
    // Open Dialog
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Xác nhận',
        description: `Bạn có muốn xóa người dùng: ${user.fullName}`
      }
    });

    this.confirmDialogService.OnOkay
      .switchMap(() => this.accountService.deleteUserID(user['_id']))
      .subscribe((response) => {
        if (response.result) {
          // close dialog
          dialog.close();
          // get all user again
          this.getAllUsers();
          // push notification
          this.notification.onSuccess(`Người dùng ${user.fullName} đã được xóa`, 'Xóa thành công');
        }
      });
  }

  public viewUser(user: any) {
    this.dialog.open(ProfileDialogComponent, {
      data: user
    });
  }


}
