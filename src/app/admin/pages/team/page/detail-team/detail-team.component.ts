import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Router
} from '@angular/router';
import { MatDialog } from '@angular/material';

import { TitleAppService } from '@shared/module/title-app';
import { TeamApiService } from '@shared/service/team-api';
import { RuleApiService } from '@shared/service/rule-api';
import {
  ConfirmDialogComponent,
  ConfirmDialogService
} from '@shared/module/confirm-dialog';
import { NotificationComponent } from '@shared/module/notification';


@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {

  @ViewChild('notification') notification: NotificationComponent;

  public valueTeam: any;
  public rulePlayer: any;


  constructor(private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService,
              private router: Router,
              private confirmDialogService: ConfirmDialogService,
              private dialog: MatDialog,
              private titleAppService: TitleAppService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.getTeamById();
    this.getRule();
  }

  public getRule() {
    this.ruleApiService.getRule()
      .subscribe((response: any) => {
        if (response.result) {
          const {player} = response.data[0];
          this.rulePlayer = player;
        }
      });
  }

  public getTeam(IdTeam) {
    this.teamApiService.getTeamId(IdTeam)
      .subscribe(response => {
        if (response.result) {
          const {nameTeam, imagesURL, stadium, _id, player} = response.data;
          this.valueTeam = {
            team: {
              nameTeam,
              imagesURL,
              stadium,
              _id
            },
            player
          };
        }
      });
  }

  public getTeamById() {
    this.activatedRoute.data
      .map(value => value.data)
      .subscribe((response) => {
        if (response.result) {
          const {nameTeam, imagesURL, stadium, _id, player} = response.data;
          this.valueTeam = {
            team: {
              nameTeam,
              imagesURL,
              stadium,
              _id
            },
            player
          };
          this.titleAppService.setTitle(`Chỉnh sửa thông tin đội bóng ${nameTeam}`);
        }
      });
  }

  public editTeam() {
    const {_id} = this.valueTeam.team;
    this.router.navigate(['', 'team', 'edit-team', _id]);
  }

  public editPlayer(player: any) {
    const idPlayer = player._id;
    const idTeam = this.valueTeam.team._id;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        idTeam,
        idPlayer
      },
    };

    this.router.navigate(['', 'team', 'edit-player'], navigationExtras);
  }

  public deletePlayer(player: any) {
    const idTeam = this.valueTeam.team._id;
    const {_id, namePlayer} = player;
    // Open Dialog
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Xác nhận',
        description: `Bạn có muốn xóa cầu thủ: ${namePlayer}`
      }
    });

    this.confirmDialogService.OnOkay
      .switchMap(() => this.teamApiService.deletePlayer(idTeam, _id))
      .subscribe((response) => {
        if (response.result) {
          dialog.close();
          this.getTeam(idTeam);
          this.notification.onSuccess(`Cầu thủ ${namePlayer} đã được xóa`, 'Xóa thành công');
        }
      });
  }

  public addPlayer() {
    const idTeam = this.valueTeam.team._id;
    this.router.navigate(['', 'team', 'add-player', idTeam]);
  }
}
