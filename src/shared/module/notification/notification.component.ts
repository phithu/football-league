import { Component } from '@angular/core';
import {
  SnotifyPosition,
  SnotifyService,
  SnotifyToastConfig
} from 'ng-snotify';

@Component({
  selector: 'app-notification',
  template: `
    <ng-snotify class="{{style}}"></ng-snotify>`
})
export class NotificationComponent {

  public style = 'material';
  public timeout = 2000;
  public position: SnotifyPosition = SnotifyPosition.rightTop;
  public progressBar = false;
  public closeClick = true;
  public newTop = true;
  public backdrop = -1;
  public dockMax = 8;
  public blockMax = 6;
  public pauseHover = true;
  public titleMaxLength = 15;
  public bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) {
  }

  /*
  Change global configuration
   */
  getConfig(config): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      timeout: this.timeout,
      position: this.position,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover,
      ...config
    };
  }

  onSuccess(body: string, title: string, config?: SnotifyToastConfig) {
    this.snotifyService.success(body, title, this.getConfig(config));
  }

  onInfo(body: string, title: string, config?: SnotifyToastConfig) {
    this.snotifyService.info(body, title, this.getConfig(config));
  }

  onError(body: string, title: string, config?: SnotifyToastConfig) {
    this.snotifyService.error(body, title, this.getConfig(config));
  }

  onWarning(body: string, title: string, config?: SnotifyToastConfig) {
    this.snotifyService.warning(body, title, this.getConfig(config));
  }

  clearAll() {
    this.snotifyService.clear();
  }

}
