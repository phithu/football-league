import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fixtures',
  templateUrl: './form-fixtures.component.html',
  styleUrls: ['./form-fixtures.component.scss']
})
export class FormFixturesComponent implements OnInit {

  @Input('group') public form: FormGroup;
  @Input('index') public index: Number;

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

  constructor() {
  }

  public ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.validatorForm());
  }

  public validatorForm(submitted?: boolean) {
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
              this.formErrors[field] += messages[key] + '';
              break;
            }
          }
        }
      }
    }
  }

}
