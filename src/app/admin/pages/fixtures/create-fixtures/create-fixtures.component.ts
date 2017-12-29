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

import { FormFixturesComponent } from './form-fixtures';
import { TitleAppService } from '../../../../../shared/module/title-app';
import { RangeValueValidator } from '../../../../extension/range-value.validator';
import { FixturesApiService } from '../../../../../shared/service/fixtures-api';
import { NotificationComponent } from '../../../../../shared/module/notification';

@Component({
  selector: 'app-create-fixtures',
  templateUrl: './create-fixtures.component.html',
  styleUrls: ['./create-fixtures.component.scss']
})
export class CreateFixturesComponent implements OnInit {

  @ViewChildren(FormFixturesComponent) formFixtures: QueryList<FormFixturesComponent>;
  @ViewChild('notification') notification: NotificationComponent;

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
              private fixturesAPIService: FixturesApiService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Tạo lịch thi đấu');
    this.createForm(5);

    this.form.valueChanges.subscribe(() => this.validatorForm());
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
        RangeValueValidator(1, 18)
      ])),
      match: this.formBuilder.array(this.generateForm(number))
    });
  }

  public initForm() {
    // initialize our address
    return this.formBuilder.group({
      home: ['', Validators.required],
      away: ['', Validators.required],
      stadium: ['', Validators.required],
      dateTime: ['', Validators.required],
      note: [''],
    });
  }

  // public addForm() {
  //   // add player to the list
  //   const control = <FormArray>this.form.controls['match'];
  //   control.push(this.initForm());
  // }
  //
  // public removeForm(i: number) {
  //   // remove player from the list
  //   const control = <FormArray>this.form.controls['match'];
  //   control.removeAt(i);
  // }

  public onSave(form) {
    const {valid, value} = form;
    if (valid) {
      this.submitted = true;
      this.fixturesAPIService.insertFixtures(value)
        .subscribe((response) => {
          this.notification.onSuccess('Tạo vòng đấu thành công', 'Thành công');
          this.submitted = false;
        });
    } else {
      this.validatorForm(true);
      this.formFixtures.forEach(component => {
        component.validatorForm(true);
      });
    }
  }

  private validatorForm(submitted?: boolean) {
    if (!this.form) {
      return;
    }
    const form = this.form;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (submitted) {
          control.markAsTouched();
          control.markAsDirty();
        }
        // self.hasError = false;
        if (control && control.dirty && !control.valid) {
          const messages = this.validatorMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
              break;
            }
          }
        }
      }
    }
  }

}
