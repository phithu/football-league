import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-info-team',
  templateUrl: './info-team.component.html',
  styleUrls: ['./info-team.component.scss']
})
export class InfoTeamComponent {

  @Input('valueForm') public valueForm: any;
  @Input('showEdit') public showEdit: boolean;
  @Input('showAddPlayer') public showAddPlayer: boolean;
  @Output('onEdit') public onEdit = new EventEmitter();
  @Output('onAddPlayer') public onAddPlayer = new EventEmitter();

  constructor() {
  }

  public onEditClick() {
    this.onEdit.emit();
  }

  public onAddPlayerClick() {
    this.onAddPlayer.emit();
  }
}
