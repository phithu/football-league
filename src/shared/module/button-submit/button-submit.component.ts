import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent {

  @Output('click') public click = new EventEmitter();
  @Input('disabled') public disabled = false;
  @Input('title') public title: string;
  @Input('color') public color = 'primary';

  public onSave(e) {
    e.stopPropagation();
    this.click.emit();
  }
}
