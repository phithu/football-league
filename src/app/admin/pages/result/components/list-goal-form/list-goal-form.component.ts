import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateForm } from "@shared/module/form-base";

@Component({
  selector: 'app-list-goal-form',
  templateUrl: './list-goal-form.component.html',
  styleUrls: ['./list-goal-form.component.scss']
})
export class ListGoalFormComponent implements OnChanges, OnInit {

  @Input('group') public form: FormGroup;
  @Input('rule') public rule: any;
  @Input('match') public match: Array<any>;
  public listTeamSelect: Array<any> = [];
  public ruleGoals: any;
  public validatorMessages = {
    namePlayer: {
      required: 'Vui lòng nhập tên cầu thủ'
    },
    teamPlayer: {
      required: 'Vui lòng nhập tên đội bóng'
    },
    typeGoals: {
      required: 'Vui lòng nhập loại bàn thắng'
    },
    timeGoal: {
      required: 'Vui lòng nhập thời điểm ghi bàn',
      pattern: 'Thời điểm ghi bàn không hợp lệ',
      range: 'Thời điểm gih bàn phải từ 0 đến 90'
    }
  };
  public formErrors = {
    namePlayer: '',
    teamPlayer: '',
    typeGoals: '',
    timeGoal: ''
  };

  constructor() {
  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {rule, match} = simpleChanges;
    if (rule.currentValue) {
      const {goals} = rule.currentValue;
      const {minTimeGoal, maxTimeGoal} = goals;
      this.ruleGoals = goals;
      this.validatorMessages.timeGoal.range = `Thời điểm ghi bàn phải từ ${minTimeGoal} đến ${maxTimeGoal}`;
    }
    if (match.currentValue) {
      const {home, away} = match.currentValue;
      this.listTeamSelect.push(home, away);
    }
  }

  public ngOnInit() {
    // this.form.valueChanges.subscribe(() => this.validatorForm());
  }

  public validatorForm(submitted?: boolean) {
    if (submitted) {
      ValidateForm(this.form, this.formErrors, this.validatorMessages, true);
    } else {
      ValidateForm(this.form, this.formErrors, this.validatorMessages);
    }
  }

}
