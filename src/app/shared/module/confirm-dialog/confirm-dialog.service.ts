import {
  EventEmitter,
  Injectable,
  Output
} from '@angular/core';


@Injectable()
export class ConfirmDialogService {

  @Output('OnOkay') OnOkay = new EventEmitter();
}
