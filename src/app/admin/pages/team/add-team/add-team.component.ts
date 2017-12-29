import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { TitleAppService } from '../../../../../shared/module/title-app';
import { AddInfoTeamComponent } from './add-info-team';
import { AddInfoListPlayerComponent } from './add-info-list-player';
import { NotificationComponent } from '../../../../../shared/module/notification';
import { RuleApiService } from '../../../../../shared/service/rule-api';
import { TeamApiService } from '../../../../../shared/service/team-api';


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
  private idTeam: string;

  constructor(private titleAppService: TitleAppService,
              private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Thêm đội bóng');
    this.getRule();
  }

  public ngAfterViewInit() {
    if (this.addInfoTeam.form && this.addInfoListPlayer.form) {
      this.changeDetectorRef.detectChanges();
    }
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
    if (this.idTeam) {
      this.teamApiService.deleteTeam(this.idTeam)
        .subscribe((response) => console.log('delete', response));
    }
    this.teamApiService.insertTeam(value)
      .subscribe((response) => {
        if (response.result) {
          console.log('add', response);
          const {idTeam} = response.data[0];
          this.idTeam = idTeam;
        }
      });
    this.valueForm = Object.assign({}, {team: value});
  }

  public nextStepTwo(value) {
    this.valueForm = Object.assign(this.valueForm, value);
  }

  public onSave() {
    this.submitted = true;
    const {team, player} = this.valueForm;

    console.log('id team', this.idTeam);

    // const {team, player} = this.valueForm;
    //
    // setTimeout(() => {
    //   this.submitted = false;
    // }, 3000);
    // const newObj = {
    //   nameTeam: team.nameTeam,
    //   stadium: team.stadium,
    //   imagesURL: team.imagesURL
    // };
    // this.teamApiService.insertTeam(team).subscribe((response) => {
    //   if (response.result) {
    //     const {idTeam} = response.data[0];
    //     const newListPlayer = [];
    //     player.forEach(item => {
    //       newListPlayer.push(Object.assign({idTeam}, item));
    //     });
    //     this.teamApiService.insertListPlayer(newListPlayer)
    //       .subscribe((newResponse) => {
    //         this.submitted = false;
    //         this.notification.onSuccess('Đội bóng đã được tạo thành công', 'Thành công');
    //       });
    //   }
    // });
  }

}
