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


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit, AfterViewInit {

  @ViewChild('addInfoTeam') addInfoTeam: AddInfoTeamComponent;
  @ViewChild('addInfoListPlayer') addInfoListPlayer: AddInfoListPlayerComponent;
  @ViewChild('notification') notification: NotificationComponent;
  public valueForm;
  public rulePlayer;

  constructor(private titleAppService: TitleAppService,
              private ruleApiService: RuleApiService,
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
          console.log(response);
        }
      });
  }

  public nextStepOne(value) {
    this.valueForm = Object.assign({}, {team: value});
  }

  public nextStepTwo(value) {
    this.valueForm = Object.assign(this.valueForm, value);
    console.log(this.valueForm);
  }

  public onSave() {
    this.notification.onSuccess('Đội bóng đã được tạo thành công', 'Thành công');
  }

}
