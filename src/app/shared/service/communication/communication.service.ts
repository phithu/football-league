import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicationService {

  public stateRadio = new BehaviorSubject<any>({
    state: false,
    index: null
  });

  public stateListRadioCheck = new BehaviorSubject<any>(null);

  public setStateRadio(state: any) {
    this.stateRadio.next(state);
  }

  public setStateListRadio(list: any) {
    this.stateListRadioCheck.next(list);
  }
}
