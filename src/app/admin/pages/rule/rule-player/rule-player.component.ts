import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-rule-player',
  templateUrl: './rule-player.component.html',
  styleUrls: ['./rule-player.component.scss', '../rule.component.scss']
})
export class RulePlayerComponent implements OnChanges {

  @Output('onSaveRule') onSaveRule = new EventEmitter();
  @Input('rule') public rule: any;

  public numberPlayer;
  public oldPlayer;
  public numberForeign;

  constructor() {
  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {currentValue} = simpleChanges.rule;
    if (currentValue) {
      this.oldPlayer = [currentValue.minOld, currentValue.maxOld];
      this.numberPlayer = [currentValue.minPlayerTeam, currentValue.maxPlayerTeam];
      this.numberForeign = currentValue.maxForeignTeam;
    }
  }

  public onChangeOldPlayer(value) {
    this.oldPlayer = value;
  }

  public onChangeNumberPlayer(value) {
    this.numberPlayer = value;
  }

  public onChangeNumberForeign(value) {
    this.numberForeign = value;
  }

  public onSaveRulePlayer() {
    this.onSaveRule.emit({
      player: {
        minOld: parseInt(this.oldPlayer[0]),
        maxOld: parseInt(this.oldPlayer[1]),
        minPlayerTeam: parseInt(this.numberPlayer[0]),
        maxPlayerTeam: parseInt(this.numberPlayer[1]),
        maxForeignTeam: parseInt(this.numberForeign)
      }
    });
  }

}
