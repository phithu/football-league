import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ValidateForm } from "@shared/module/form-base";

@Component({
  selector: 'app-rule-goal-control',
  templateUrl: './rule-goal-control.component.html',
  styleUrls: ['./rule-goal-control.component.scss']
})
export class RuleGoalControlComponent implements OnInit {

  @Input('group') public form: FormGroup;
  @Input('index') public index: number;

  public validatorMessages = {
    goalControl: {
      required: 'Vui lòng nhập loại bàn thắng'
    }
  };
  public formErrors = {
    goalControl: '',
  };

  constructor() {
  }

  public ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.validatorForm());
  }

  public validatorForm(submitted?: boolean) {
    if (submitted) {
      ValidateForm(this.form, this.formErrors, this.validatorMessages, true);
    } else {
      ValidateForm(this.form, this.formErrors, this.validatorMessages);
    }
  }
}
