import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-rule-point',
  templateUrl: './rule-point.component.html',
  styleUrls: ['./rule-point.component.scss', '../rule.component.scss']
})
export class RulePointComponent implements OnChanges {

  @Input('rule') public rule: any;
  @Output('onSaveRule') onSaveRule = new EventEmitter();

  public winPoint: Number;
  public drawPoint: Number;
  public lostPoint: Number;


  constructor() {
  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {currentValue} = simpleChanges.rule;
    if (currentValue) {
      const {winPoint, drawPoint, lostPoint} = currentValue;
      this.winPoint = parseInt(winPoint);
      this.drawPoint = parseInt(drawPoint);
      this.lostPoint = parseInt(lostPoint);
    }
  }

  public onSaveRulePoint() {
    this.onSaveRule.emit({
      winPoint: this.winPoint,
      drawPoint: this.drawPoint,
      lostPoint: this.lostPoint
    });
  }

  public onChangePointWin(value) {
    this.winPoint = value;
  }

  public onChangePointDraw(value) {
    this.drawPoint = value;
    if (value === 1) {
      this.lostPoint = 0;
    }
  }

  public onChangePointLost(value) {
    this.lostPoint = value;
  }
}
