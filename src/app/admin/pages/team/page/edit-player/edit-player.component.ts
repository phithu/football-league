import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { TitleAppService } from '../../../../../../shared/module/title-app';
import { TeamApiService } from '../../../../../../shared/service/team-api';
import { NotificationComponent } from '../../../../../../shared/module/notification';
import { RuleApiService } from '../../../../../../shared/service/rule-api';
import { FormBaseComponent } from '../../../../../../shared/module/form-base';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent extends FormBaseComponent implements OnInit {

  @ViewChild('notification') notification: NotificationComponent;
  public rulePlayer: any;
  public isCallAPI: boolean;
  public isUploadNewAvatar = false;
  public form: FormGroup;
  public controlConfig = {
    namePlayer: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    typePlayer: new FormControl('', Validators.required),
    notes: new FormControl(''),
    imagesURL: new FormControl(''),
  };
  public validatorMessages = {
    namePlayer: {
      required: 'Vui lòng tên cầu thủ'
    },
    typePlayer: {
      required: 'Vui lòng lựa chọn loại cầu thủ'
    },
    birthDate: {
      required: 'Vui lòng nhập ngày sinh cầu thủ',
      Old: 'Tuổi cầu thủ...'
    }
  };
  public formErrors = {
    namePlayer: '',
    typePlayer: '',
    birthDate: ''
  };

  public configForm = {
    updateOn: 'change'
  };

  public TYPE_PLAYER = {
    FOREIGN: 'foreign',
    NATIVE: 'native',
  };

  public get imagesURL() {
    return this.form.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.form.get('imagesURL').setValue(value);
  }

  public set typePlayer(value) {
    this.form.get('typePlayer').setValue(value);
  }

  constructor(private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService,
              private titleAppService: TitleAppService,
              private activatedRoute: ActivatedRoute) {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.titleAppService.setTitle('Chỉnh sửa cầu thủ');
    this.getRule();
  }

  public getRule() {
    this.ruleApiService.getRule()
      .subscribe((response: any) => {
        if (response.result) {
          this.isCallAPI = true;
          const {player} = response.data[0];
          this.rulePlayer = player;
        }
      });
  }

  public getImagesUpload(imagesURL) {
    this.isUploadNewAvatar = true;
    if (imagesURL) {
      this.form.patchValue({imagesURL});
    }
  }

  public deleteImages() {
    // reset value when click delete images
    this.imagesURL = '';
  }
}
