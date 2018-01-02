import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FormBaseComponent } from '../../../../../../shared/module/form-base';
import { TitleAppService } from '../../../../../../shared/module/title-app';
import { TeamApiService } from '../../../../../../shared/service/team-api';
import { NotificationComponent } from '../../../../../../shared/module/notification';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent extends FormBaseComponent implements OnInit {

  @ViewChild('notification') notification: NotificationComponent;
  public valueTeam: any;
  public isUploadNewAvatar = false; // Check whether or not upload new avatar
  public uploaded = true;
  public submitted = false;
  public form: FormGroup;
  public controlConfig = {
    nameTeam: new FormControl('', [Validators.required]),
    stadium: new FormControl('', [Validators.required]),
    imagesURL: new FormControl('', [Validators.required]),
  };
  public validatorMessages = {
    nameTeam: {
      required: 'Vui lòng nhập tên đội bóng'
    },
    stadium: {
      required: 'Vui lòng nhập sân vận động'
    },
    imagesURL: {
      required: 'Vui lòng lựa chọn logo đội bóng'
    },
  };
  public formErrors = {
    nameTeam: '',
    stadium: '',
    imagesURL: ''
  };

  public configForm = {
    updateOn: 'change'
  };

  public get imagesURL() {
    return this.form.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.form.get('imagesURL').setValue(value);
  }

  constructor(private teamApiService: TeamApiService,
              private titleAppService: TitleAppService,
              private activatedRoute: ActivatedRoute) {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.form.valueChanges.subscribe(() => this.validatorForm());
    this.getTeamById();
  }

  public getTeamById() {
    this.activatedRoute.data
      .map(value => value.data)
      .subscribe((response) => {
        if (response.result) {
          const {nameTeam, imagesURL, stadium, _id} = response.data;
          this.valueTeam = {
            team: {
              nameTeam,
              imagesURL,
              stadium,
              _id
            },
          };
          this.imagesURL = this.valueTeam.team.imagesURL;
          this.form.patchValue(this.valueTeam.team);
          this.titleAppService.setTitle(`Chỉnh sửa thông tin đội bóng ${nameTeam}`);
        }
      });
  }

  public getImagesUpload(imagesURL) {
    this.isUploadNewAvatar = true;
    if (imagesURL) {
      this.uploaded = true;
      this.form.patchValue({imagesURL});
    } else {
      this.uploaded = false;
    }
  }

  public deleteImages() {
    // reset value when click delete images
    this.imagesURL = '';
  }

  public editTeamSubmit() {
    const {value, valid} = this.form;
    if (valid) {
      this.submitted = true;
      const {_id} = this.valueTeam.team;
      this.teamApiService.updateTeam(_id, value)
        .subscribe((response) => {
          if (response.result) {
            this.submitted = false;
            this.notification.onSuccess(`Đội bóng ${value.nameTeam} đã được tạo cập nhập`, 'Thành công');
          }
        });
    } else {
      this.validatorForm(true);
    }
  }
}
