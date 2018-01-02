import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent {

  @Input('player') public player: any;
  @Input('showEdit') public showEdit: boolean;
  @Input('showDelete') public showDelete: boolean;
  @Output('onEdit') public onEdit = new EventEmitter();
  @Output('onDelete') public onDelete = new EventEmitter();

  public onEditClick() {
    this.onEdit.emit();
  }

  public onDeleteClick() {
    this.onDelete.emit();
  }
}
