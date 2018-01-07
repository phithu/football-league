import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';

import { WidgetService } from './widget.service';

const STATE_WIDGET = {
  ACTIVE_BACK: false,
  ACTIVE_FRONT: true,
};

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'widget',
  providers: [WidgetService]
})
export class WidgetComponent implements OnChanges {

  @Input('height') public height: number = 170;

  constructor(private element: ElementRef,
              private widgetService: WidgetService) {
  }

  ngOnChanges() {
    this.element.nativeElement.style.height = `${this.height}px`;
  }

  closeFront() {
    this.widgetService.onNext(STATE_WIDGET.ACTIVE_BACK);
  }

  closeBack() {
    this.widgetService.onNext(STATE_WIDGET.ACTIVE_FRONT);
  }
}
