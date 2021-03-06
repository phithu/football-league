import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TeamApiService } from '@shared/service/team-api';
import { ValidateForm } from '@shared/module/form-base';

@Component({
  selector: 'app-form-fixtures',
  templateUrl: './form-fixtures.component.html',
  styleUrls: ['./form-fixtures.component.scss']
})
export class FormFixturesComponent implements OnInit {

  @Input('group') public form: FormGroup;
  @Input('index') public index: Number;
  @Input('listTeam') public listTeam: Array<any>;
  public minDate = new Date();

  public validatorMessages = {
    home: {
      required: 'Vui lòng nhập đội chủ nhà'
    },
    away: {
      required: 'Vui lòng nhập đội khách'
    },
    stadium: {
      required: 'Vui lòng nhập sân vận động'
    },
    dateTime: {
      required: 'Vui lòng nhập ngày thi đấu'
    }
  };
  public formErrors = {
    home: '',
    away: '',
    stadium: '',
    dateTime: '',
  };

  constructor(private teamApiService: TeamApiService) {
  }

  public ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.validatorForm());

    this.form.get('home').valueChanges
      .subscribe((value) => this.onChangeHomeTeam(value));

    this.form.get('away').valueChanges
      .subscribe((value) => this.onChangeAwayTeam(value));
  }

  public getStadium(nameTeam) {
    this.teamApiService.getStadium(nameTeam).subscribe((res) => {
      const {result, data} = res;
      if (result && data) {
        this.form.patchValue({stadium: data.stadium});
      }
    });
  }

  public getLogoTeam(nameTeam, callback: Function) {
    this.teamApiService.getLogoTeam(nameTeam).subscribe((res) => {
      const {result, data} = res;
      if (result && data) {
        if (callback) {
          callback(data);
        }
      }
    });
  }

  public onChangeHomeTeam(value) {
    if (value) {
      this.getStadium(value);
      this.getLogoTeam(value, (data) => {
        this.form.patchValue({homeImages: data.imagesURL});
      });
    }
  }

  public onChangeAwayTeam(value) {
    if (value) {
      this.getLogoTeam(value, (data) => {
        this.form.patchValue({awayImages: data.imagesURL});
      });
    }
  }

  public validatorForm(submitted?: boolean) {
    if (submitted) {
      ValidateForm(this.form, this.formErrors, this.validatorMessages, true);
    } else {
      ValidateForm(this.form, this.formErrors, this.validatorMessages);
    }
  }

}
