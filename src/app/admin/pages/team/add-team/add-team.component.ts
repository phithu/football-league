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

  constructor(private titleAppService: TitleAppService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Thêm đội bóng');
  }

  public ngAfterViewInit() {
    if (this.addInfoTeam.form && this.addInfoListPlayer.form) {
      this.changeDetectorRef.detectChanges();
    }
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
