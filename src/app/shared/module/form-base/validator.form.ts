import { FormGroup } from '@angular/forms';

export function ValidateForm(formGroup: FormGroup, formErrors: any, validatorMessages: any, submitted?: boolean, callbackSubmitted?: Function) {
  if (!formGroup) {
    return;
  }
  for (const field in formErrors) {
    if (formErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = formGroup.get(field);
      if (submitted) {
        control.markAsTouched();
        control.markAsDirty();
        if (callbackSubmitted) {
          callbackSubmitted();
        }
      }
      if (control && control.dirty && !control.valid) {
        const messages = validatorMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            formErrors[field] += messages[key] + ' ';
            break;
          }
        }
      }
    }
  }
}
