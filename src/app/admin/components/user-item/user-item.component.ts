import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent {

  @Input('user') public user: any;
  @Output('onDelete') public onDelete = new EventEmitter();
  @Output('onView') public onView = new EventEmitter();
  @Output('onSelect') public onSelect = new EventEmitter();

  private viewUser() {
    this.onView.emit();
  }

  private deleteUser() {
    this.onDelete.emit();
  }

  private selectUser() {
    this.onSelect.emit();
  }
}

