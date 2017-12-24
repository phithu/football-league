import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-front-widget',
  templateUrl: './front-widget.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./front-widget.component.scss'],

})
export class FrontWidgetComponent implements OnInit {

  @HostBinding('class.inactiveFront') activeClass: boolean = false;

  constructor(private widgetService: WidgetService) {
  }

  public ngOnInit() {
    this.getDataFromMainWidget();
  }

  public getDataFromMainWidget() {
    this.widgetService.Data.subscribe(
      (state) => {
        // Show back widget
        if (state !== null) {
          this.activeClass = !state;
        }
      });
  }


}
