import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    },
  ]
})
export class InputDateComponent implements ControlValueAccessor {

  @Output('getValue') getValue = new EventEmitter();
  @Input('minDate') public minDate: any;
  @Input('maxDate') public maxDate: any;
  @Input('placeholder') public placeholder: string;
  @Input('validatorMessage') public validatorMessage: any;
  @Input('color') public color: any;
  @Input('disabled') public disabled = false;


  public data: any;
  public propagateChange = (_: any) => {
  };

  // this is the initial value set to the component
  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  public registerOnTouched() {
  }

  public onClose(date: any) {
    this.propagateChange(this.data);
    this.getValue.emit(date);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
