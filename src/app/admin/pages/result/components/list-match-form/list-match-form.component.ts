import {
  Component,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { ListGoalFormComponent } from '../list-goal-form';
import { TeamApiService } from '../../../../../../shared/service/team-api';
import { RuleApiService } from '../../../../../../shared/service/rule-api';
import { RangeValueValidator } from '../../../../../extension/range-value.validator';

@Component({
  selector: 'app-list-match-form',
  templateUrl: './list-match-form.component.html',
  styleUrls: ['./list-match-form.component.scss']
})
export class ListMatchFormComponent implements OnChanges, OnInit {

  @ViewChildren(ListGoalFormComponent) formGoals: QueryList<ListGoalFormComponent>;
  @Input('group') public form: FormGroup;
  @Input('match') public match: Array<any>;
  public rule: any;
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
    },
    soccer: {
      required: 'Vui lòng nhập tỉ số trận đấu đấu'
    }
  };
  public formErrors = {
    home: '',
    away: '',
    stadium: '',
    dateTime: '',
    soccer: ''
  };

  constructor(private formBuilder: FormBuilder,
              private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService) {
  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {currentValue} = simpleChanges.match;
    if (currentValue) {
      this.form.patchValue(currentValue);
    }
  }

  public ngOnInit() {
    this.form.valueChanges.subscribe(() => this.validatorForm(true));

    this.form.get('home').valueChanges
      .subscribe((value) => this.onChangeHomeTeam(value));

    this.form.get('away').valueChanges
      .subscribe((value) => this.onChangeAwayTeam(value));

    this.form.get('soccer').valueChanges
      .debounceTime(300).subscribe((value) => this.onComplete(value));

    this.getRule();
  }

  public getRule() {
    this.ruleApiService.getRule()
      .subscribe((response: any) => {
        const {result, data} = response;
        if (result) {
          this.rule = data[0];
        }
      });
  }

  public createListGoalForm(number) {
    this.form.addControl('listGoalForm',
      this.formBuilder.array(this.generateFormGoal(number)));
  }

  public removeListGoalForm() {
    this.form.removeControl('listGoalForm');
  }

  public generateFormGoal(number) {
    const arrayForm = [];
    for (let i = 1; i <= number; i++) {
      arrayForm.push(this.initFormGoal());
    }
    return arrayForm;
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

  public initFormGoal() {
    const {minTimeGoal, maxTimeGoal} = this.rule.goals;
    return this.formBuilder.group({
      namePlayer: ['', Validators.required],
      teamPlayer: ['', Validators.required],
      typeGoals: ['', Validators.required],
      timeGoal: ['', Validators.compose([Validators.required,
        Validators.pattern(/^\d+$/),
        RangeValueValidator(minTimeGoal, maxTimeGoal)])],
    });
  }

  public onComplete(soccer) {
    if (soccer.charAt(0) && soccer.charAt(1)) {
      const totalSoccer = parseInt(soccer.charAt(0)) + parseInt(soccer.charAt(1));
      if (totalSoccer > 0) {
        this.removeListGoalForm();
        this.createListGoalForm(totalSoccer);
      } else {
        this.removeListGoalForm();
      }
    }
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
    if (this.form['controls'].listGoalForm) {
      this.formGoals.forEach(component => {
        component.validatorForm(true);
      });
    }
  }
}
