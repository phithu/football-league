import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { TitleAppService } from '@shared/module/title-app';
import { TeamApiService } from '@shared/service/team-api';
import {
  ConfirmDialogComponent,
  ConfirmDialogService
} from '@shared/module/confirm-dialog';
import { NotificationComponent } from '@shared/module/notification';


@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {

  public listTeam: Array<any>;
  public isCallAPI: boolean;
  @ViewChild('notification') notification: NotificationComponent;

  constructor(private router: Router,
              private titleAppService: TitleAppService,
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
          this.isCallAPI = true;
        }
      });
  }

  public deleteTeam(team: any) {
    const {_id, nameTeam} = team;
    // Open Dialog
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Xác nhận',
        description: `Bạn có muốn xóa đội bóng: ${nameTeam}`
      }
    });

    this.confirmDialogService.OnOkay
      .switchMap(() => this.teamApiService.deleteTeam(_id))
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

  }

  public navigateDetail(team) {
    this.router.navigate(['', 'team', 'detail-team', team['_id']]);
  }

}
