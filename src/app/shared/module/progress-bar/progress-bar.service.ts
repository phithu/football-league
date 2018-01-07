import {
  EventEmitter,
  Injectable
} from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';

@Injectable()
export class ProgressBarService {

  public onStart = new EventEmitter<boolean>();
  public onDone = new EventEmitter<boolean>();

  private _isStarted = false;
  private _counter = 0;
  private _doneTimeout;

  constructor(private progress: NgProgress) {
    // empty
  }

  public start() {
    this.progress.start();

    this.onStart.emit(true);
  }

  public done() {
    this.onDone.emit(true);
    setTimeout(() => {
      this.progress.done();
    }, 400);
  }


}
