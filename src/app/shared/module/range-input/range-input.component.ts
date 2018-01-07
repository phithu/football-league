import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['range-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RangeInputComponent implements OnChanges {

  @Input('value') value;
  @Input('type') type = true;
  @Input('min') min: number;
  @Input('max') max: number;
  @Input('limit') limit: number;
  @Input('disabled') disabled: boolean = false;
  @Output('change') change = new EventEmitter();

  public config = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    step: 1,
    limit: 100,
    range: {
      min: 0,
      max: 100
    }
  };

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {limit, max, min} = simpleChanges;
    if (limit && limit.currentValue) {
      this.config.limit = limit.currentValue;
    }
    if (max && max.currentValue) {
      this.config.range.max = max.currentValue;
    }
    if (min && min.currentValue) {
      this.config.range.min = min.currentValue;
    }
  }

  public onChange(value) {
    this.change.emit(value);
  }

}
