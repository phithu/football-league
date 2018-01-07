import { WidgetService } from '../widget.service';
import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-back-widget',
  templateUrl: './back-widget.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./back-widget.component.scss']
})
export class BackWidgetComponent implements OnInit {

  @HostBinding('class.activeBack') activeClass: boolean = false;

  constructor(private widgetService: WidgetService) {
  }

  public ngOnInit() {
    this.getDataFromMainWidget();
  }

  getDataFromMainWidget() {
    this.widgetService.Data.subscribe(
      (state) => {
        if (state !== null) {
          this.activeClass = !state;
        }
      });
  }


}
