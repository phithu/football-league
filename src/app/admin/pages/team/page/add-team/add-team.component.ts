import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { TitleAppService } from '../../../../../../shared/module/title-app';
import { NotificationComponent } from '../../../../../../shared/module/notification';
import { RuleApiService } from '../../../../../../shared/service/rule-api';
import { TeamApiService } from '../../../../../../shared/service/team-api';
import { AddInfoTeamComponent } from '../../component/add-info-team';
import { AddInfoListPlayerComponent } from '../../component/add-info-list-player';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit, AfterViewInit {

  @ViewChild('addInfoTeam') addInfoTeam: AddInfoTeamComponent;
  @ViewChild('addInfoListPlayer') addInfoListPlayer: AddInfoListPlayerComponent;
  @ViewChild('notification') notification: NotificationComponent;

  public submitted = false;
  public valueForm;
  public rulePlayer;
  public isRenderChild: boolean;
  public isCallAPI: boolean; // CHECK WHETHER CALLED API
  constructor(private titleAppService: TitleAppService,
              private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Thêm đội bóng');
    this.getAllTeam();
  }

  public ngAfterViewInit() {
    if (this.addInfoTeam && this.addInfoTeam.form &&
      this.addInfoListPlayer &&
      this.addInfoListPlayer.form) {
      this.changeDetectorRef.detectChanges();
    }
  }

  public getAllTeam() {
    this.teamApiService.getAllTeam()
      .subscribe((response) => {
        this.isCallAPI = true;
        const {result, data} = response;
        if (result) {
          if (data.length < 10) {
            this.isRenderChild = true;
            this.getRule();
          } else {
            this.isRenderChild = false;
          }
          this.changeDetectorRef.detectChanges();
        }
      });
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

  public nextStepOne(value) {
    this.valueForm = Object.assign({}, {team: value});
  }

  public nextStepTwo(value) {
    this.valueForm = Object.assign(this.valueForm, value);
  }

  public onSave() {
    this.submitted = true;
    this.checkTeamExist();
  }

  private checkTeamExist() {
    const {team} = this.valueForm;
    this.teamApiService.checkTeam(team.nameTeam)
      .subscribe((response) => {
        if (response.result) {
          if (response.msg === 'team_exist') {
            this.submitted = false;
            this.notification.onError('Đội bóng đã tồn tại', 'Lỗi');
          } else {
            this.insertTeam();
          }
        }
      });
  }

  private insertTeam() {
    const {team} = this.valueForm;
    this.teamApiService.insertTeam(this.valueForm)
      .subscribe((response) => {
        if (response.result) {
          this.submitted = false;
          this.notification.onSuccess(`Đội bóng ${team.nameTeam} đã được tạo thành công`, 'Thành công');
        }
      });
  }

}
