import {
  Component,
  OnInit,
} from '@angular/core';

import {
  FormGroup,
  FormControl,
} from '@angular/forms';

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
  }

  public validatorControl(field?: string, submited?: boolean) {
    if (!field) {
      return;
    }
    if (this.formErrors.hasOwnProperty(field)) {
      this.formErrors[field] = ''; // <-- clear errors message previous
      const control = this.form.get(field); // <-- Get control by filed name
      if (control && control.invalid) {
        const message = this.validatorMessages[field];
        for (const keyError in control.errors) {
          if (control.errors.hasOwnProperty(keyError)) { // <-- Check the control have had error with keyError
            this.formErrors[field] = message[keyError]; // <-- Set value form formErrors
          }
        }
      }
    }
  }

  public validatorForm(submited?: boolean) {
    if (!this.form) { // <-- The form haven't existed yet
      return;
    }
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        if (submited) {
          this.form.markAsDirty();
        }
        this.validatorControl(field);
      }
    }
  }

}
