import {
  EventEmitter,
  Injectable,
  Output
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleAppService {

  @Output('getTitle') public getTitle = new EventEmitter();

  constructor(private titleService: Title) {
    // empty
  }

  public setTitle(title: string) {
    this.getTitle.emit(title);
    this.titleService.setTitle(title);
  }
}
