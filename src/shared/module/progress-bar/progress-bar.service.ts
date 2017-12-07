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
    this._isStarted = true;
    this._counter++;
    this.progress.start();
    if (this._doneTimeout) {
      clearTimeout(this._doneTimeout);
    }
    this.onStart.emit(true);
  }

  public done() {
    this._counter--;
    if (this._counter <= 0) {
      this._counter = 0;
      this._isStarted = false;
      this._doneTimeout = setTimeout(() => {
        this.progress.done();
      }, 400);
      this.onDone.emit(true);
    }
  }


}
