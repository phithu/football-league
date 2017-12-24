import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WidgetService {

  public Data = new BehaviorSubject(null);

  // emit data
  public onNext(data: any) {
    this.Data.next(data);
  }

}
