import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { RuleGoalControlComponent } from './rule-goal-control';

@Component({
  selector: 'app-rule-goal',
  templateUrl: './rule-goal.component.html',
  styleUrls: ['./rule-goal.component.scss', '../rule.component.scss']
})
export class RuleGoalComponent implements OnChanges, OnInit {

  @Input('rule') public rule: any;
  @Output('onSaveRule') onSaveRule = new EventEmitter();
  @ViewChildren(RuleGoalControlComponent) ruleGoalControl: QueryList<RuleGoalControlComponent>;
  public form: FormGroup;
  public timeGoal: Array<any>;
  public maxTypeGoal: number;


  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {currentValue} = simpleChanges.rule;
    if (currentValue) {
      const {minTimeGoal, maxTimeGoal, maxTypeGoal, listTypeGoals} = currentValue;

      this.maxTypeGoal = parseInt(maxTypeGoal);
      this.timeGoal = [parseInt(minTimeGoal), parseInt(maxTimeGoal)];
      this.updateNumberForm(maxTypeGoal);
      this.patchValueForm(listTypeGoals);
    }
  }

  public ngOnInit() {
    this.createForm(3);
  }

  public updateNumberForm(maxTypeGoal) {
    if (maxTypeGoal > 3) {
      for (let i = 1; i <= (maxTypeGoal - 3); i++) {
        this.addForm();
      }
    }
  }

  public patchValueForm(listTypeGoals) {
    listTypeGoals.forEach((item, index) => {
      const control = <FormArray>this.form.controls['goalForm'];
      control.controls[index].patchValue(item);
    });
  }

  public generateForm(number: Number) {
    const arrayForm = [];
    for (let i = 1; i <= number; i++) {
      arrayForm.push(this.initForm());
    }
    return arrayForm;
  }

  public createForm(number) {
    this.form = this.formBuilder.group({
      goalForm: this.formBuilder.array(this.generateForm(number))
    });
  }

  public initForm(value?) {
    return this.formBuilder.group({
      goalControl: [value, Validators.required],
    });
  }

  public addForm() {
    // add player to the list
    const control = <FormArray>this.form.controls['goalForm'];
    control.push(this.initForm());
  }

  public removeForm(i: number) {
    // remove player from the list
    const control = <FormArray>this.form.controls['goalForm'];
    control.removeAt(i);
  }

  public onSaveRuleGoal() {
    const {valid, value} = this.form;
    if (valid) {
      const {goalForm} = value;
      this.onSaveRule.emit({
        listTypeGoals: goalForm,
        maxTypeGoal: goalForm.length,
        minTimeGoal: this.timeGoal[0],
        maxTimeGoal: this.timeGoal[1]
      });
    } else {
      this.ruleGoalControl.forEach(component => {
        component.validatorForm(true);
      });
    }
  }

  public onChangeTimeGoal(value) {
    this.timeGoal = value;
  }
}
