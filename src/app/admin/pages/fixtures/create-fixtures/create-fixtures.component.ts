import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { TitleAppService } from '@shared/module/title-app';
import { RangeValueValidator } from '@extension/range-value.validator';
import { FixturesApiService } from '@shared/service/fixtures-api';
import { NotificationComponent } from '@shared/module/notification';
import { TeamApiService } from '@shared/service/team-api';
import { ValidateForm } from "@shared/module/form-base";

import { FormFixturesComponent } from './form-fixtures';

@Component({
  selector: 'app-create-fixtures',
  templateUrl: './create-fixtures.component.html',
  styleUrls: ['./create-fixtures.component.scss']
})
export class CreateFixturesComponent implements OnInit {

  @ViewChildren(FormFixturesComponent) formFixtures: QueryList<FormFixturesComponent>;
  @ViewChild('notification') notification: NotificationComponent;

  public listTeam: Array<any>;
  public listFixtures: Array<any>;
  public listMatch: Array<Number>;
  public isCallAPI: boolean;
  public form: FormGroup;
  public submitted = false;
  public validatorMessages = {
    week: {
      required: 'Vui lòng nhập vòng đấu',
      pattern: 'Vòng đấu không hợp lệ, vui lòng kiểm tra lại',
      range: 'Vòng đấu phải từ 1 đến 18'
    }
  };
  public formErrors = {
    week: '',
  };

  constructor(private formBuilder: FormBuilder,
              private titleAppService: TitleAppService,
              private teamApiService: TeamApiService,
              private fixturesApiService: FixturesApiService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Tạo lịch thi đấu');
    this.createForm(4);
    this.getAllFixtures();
    this.form.valueChanges.subscribe(() => this.validatorForm());
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

  public getAllFixtures() {
    this.fixturesApiService.getAllFixtures()
      .subscribe((response) => {
        const {result, data} = response;
        if (result) {
          this.listFixtures = data;
          this.listMatch = this.generateListMatch(this.listFixtures.length + 1);
          this.form.patchValue({week: this.listMatch.length});
          this.getAllTeam();
        }
      });
  }

  public generateForm(number) {
    const arrayForm = [];
    for (let i = 1; i <= number; i++) {
      arrayForm.push(this.initForm());
    }
    return arrayForm;
  }

  public createForm(number) {
    this.form = this.formBuilder.group({
      week: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
        RangeValueValidator(1, 16)
      ])),
      match: this.formBuilder.array(this.generateForm(number))
    });
  }

  public initForm() {
    // initialize our address
    return this.formBuilder.group({
      home: ['', Validators.required],
      homeImages: [''],
      away: ['', Validators.required],
      awayImages: [''],
      stadium: ['', Validators.required],
      dateTime: ['', Validators.required],
      note: [''],
    });
  }

  public onSave(form) {
    const {valid, value} = form;
    if (valid) {
      this.submitted = true;
      this.fixturesApiService.insertFixtures(value)
        .subscribe((response) => {
          if (response.result) {
            this.notification.onSuccess('Tạo vòng đấu thành công', 'Thành công');
            this.submitted = false;
          }
        });
    } else {
      this.validatorForm(true);
      this.formFixtures.forEach(component => {
        component.validatorForm(true);
      });
    }
  }

  private validatorForm(submitted?: boolean) {
    if (submitted) {
      ValidateForm(this.form, this.formErrors, this.validatorMessages, true);
    } else {
      ValidateForm(this.form, this.formErrors, this.validatorMessages);
    }
  }

  private generateListMatch(number): Array<Number> {
    const myArray = [];
    for (let i = 1; i <= number; i++) {
      myArray.push(i);
    }
    return myArray;
  }

}
