import { AbstractControl } from '@angular/forms';

export const RangeValueValidator = (minValue, maxValue) => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    const input = control;
    if (!input || !minValue || !maxValue) {
      return null;
    }
    if (minValue <= parseInt(input.value) && parseInt(input.value) <= maxValue) {
      return null;
    }
    return {'range': true};
  };
};
