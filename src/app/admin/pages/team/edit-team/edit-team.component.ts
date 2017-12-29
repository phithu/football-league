import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/switchMap';

import { TitleAppService } from '../../../../../shared/module/title-app';
import { TeamApiService } from '../../../../../shared/service/team-api';
import {
  ConfirmDialogComponent,
  ConfirmDialogService
} from '../../../../../shared/module/confirm-dialog';
import { NotificationComponent } from '../../../../../shared/module/notification';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  public listTeam: Array<any>;
  @ViewChild('notification') notification: NotificationComponent;

  constructor(private titleAppService: TitleAppService,
              private teamApiService: TeamApiService,
              private confirmDialogService: ConfirmDialogService,
              private dialog: MatDialog) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Chỉnh sửa đội bóng');
    this.getAllTeam();
  }

  public getAllTeam() {
    this.teamApiService.getAllTeam()
      .subscribe((response) => {
        const {result, data} = response;
        if (result) {
          this.listTeam = data;
          console.log('list team', this.listTeam);
        }
      });
  }

  public deleteTeam(team: any) {

    const {idTeam, nameTeam} = team;
    // Open Dialog
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Xác nhận',
        description: `Bạn có muốn xóa đội bóng: ${nameTeam}`
      }
    });

    this.confirmDialogService.OnOkay
      .switchMap(() => this.teamApiService.deleteTeam(idTeam))
      .subscribe((response) => {
        if (response.result) {
          // close dialog
          dialog.close();
          // get all user again
          this.getAllTeam();
          // push notification
          this.notification.onSuccess(`Đội bóng ${nameTeam} đã được xóa`, 'Xóa thành công');
        }
      });

    // this.confirmDialogService.OnOkay.subscribe(() => {
    //   this.teamApiService.deleteTeam(idTeam).subscribe((response) => {
    //     if (response.result) {
    //       // close dialog
    //       dialog.close();
    //       // get all user again
    //       this.getAllTeam();
    //       // push notification
    //       this.notification.onSuccess(`Người dùng ${nameTeam} đã được xóa`, 'Xóa thành công');
    //     }
    //   });
    // });
  }

}
