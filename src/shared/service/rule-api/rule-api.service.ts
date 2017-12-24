import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../../../config/app-const';

@Injectable()
export class RuleApiService {

  constructor(private http: HttpClient) {
  }

  public getRule() {
    return this.http.post(`${AppConst.domain}/get-rule`, {});
  }

  public updateRulePlayer(player) {
    return this.http.post(`${AppConst.domain}/update-rule-player`, {player});
  }

  public updateRuleGoal(goal) {
    return this.http.post(`${AppConst.domain}/update-rule-goal`, {goal});
  }

  public updateRulePoint(point) {
    return this.http.post(`${AppConst.domain}/update-rule-point`, {point});
  }
}
