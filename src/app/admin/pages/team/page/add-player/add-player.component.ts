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
import * as moment from 'moment';

import { FormBaseComponent } from '@shared/module/form-base';
import { RuleApiService } from '@shared/service/rule-api';
import { TeamApiService } from '@shared/service/team-api';
import { NotificationComponent } from '@shared/module/notification';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent extends FormBaseComponent implements OnInit {

  @ViewChild('notification') notification: NotificationComponent;
  public form: FormGroup;
  public disabledSubmit = false;
  public controlConfig = {
    namePlayer: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    typePlayer: new FormControl('', [Validators.required]),
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

  public TYPE_PLAYER = {
    FOREIGN: 'foreign',
    NATIVE: 'native',
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

  public rulePlayer: any;
  public minDate;
  public maxDate;
  public disabledCheckbox: boolean;
  public isCallAPI: boolean;
  public idTeam: any;

  constructor(private activatedRoute: ActivatedRoute,
              private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService) {
    super();
  }

  public ngOnInit() {
    this.getRule();
    super.ngOnInit();
  }

  public getRule() {
    this.ruleApiService.getRule()
      .subscribe((response: any) => {
        if (response.result) {
          const {player} = response.data[0];
          this.rulePlayer = player;
          const {maxForeignTeam, minOld, maxOld} = this.rulePlayer;
          this.getRuleOldPlayer(minOld, maxOld);
          this.getNumberPlayerForeign(maxForeignTeam);
        }
      });
  }

  public getNumberPlayerForeign(maxForeignTeam) {
    this.activatedRoute.params
      .do(params => this.idTeam = params['id'])
      .switchMap(params => this.teamApiService.getNumberForeign(params['id']))
      .subscribe(response => {
        const {result, data} = response;
        if (result && data && data.numberForeign >= maxForeignTeam) {
          this.disabledCheckbox = true;
        }
        this.isCallAPI = true;
      });
  }

  public getImagesUpload(imagesURL) {
    if (imagesURL) {
      this.disabledSubmit = false;
      this.form.patchValue({imagesURL});
    } else {
      this.disabledSubmit = true;
    }
  }

  public deleteImages() {
    // reset value when click delete images
    this.imagesURL = '';
  }

  public submitAddPlayer(form) {
    this.disabledSubmit = true;
    const {valid, value} = form;
    if (valid) {
      this.teamApiService.insertPlayer(this.idTeam, value)
        .subscribe((response) => {
          if (response.result) {
            this.disabledSubmit = false;
            this.notification.onSuccess(`Cầu thủ đã được tạo thành công`, 'Thành công');
          }
        });
    } else {
      this.validatorForm(true);
      this.disabledSubmit = false;
    }
  }

  private getRuleOldPlayer(minOld, maxOld) {
    this.minDate = moment().startOf('year')
      .subtract(minOld, 'year').toDate();
    this.maxDate = moment().startOf('year')
      .subtract(maxOld, 'year').toDate();
  }

}
