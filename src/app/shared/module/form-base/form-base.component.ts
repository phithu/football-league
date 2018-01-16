import {
  Component,
  OnInit,
} from '@angular/core';

import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { ValidateForm } from './validator.form';

@Component({
  selector: 'app-form-base',
  template: '',
})
export class FormBaseComponent implements OnInit {

  public form: FormGroup;
  public configForm: {[key: string]: string};
  public controlConfig: { [key: string]: FormControl };
  public validatorMessages: {
    [key: string]: { [key: string]: string }
  };
  public formErrors: { [key: string]: string };

  public ngOnInit() {
    this.form = new FormGroup(this.controlConfig, this.configForm);
    this.validatorForm();
  }

  public validatorForm(submitted?: boolean) {
    if (submitted) {
      ValidateForm(this.form, this.formErrors, this.validatorMessages, true);
    } else {
      ValidateForm(this.form, this.formErrors, this.validatorMessages);
    }
  }

}
