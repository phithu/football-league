import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-info-team',
  templateUrl: './info-team.component.html',
  styleUrls: ['./info-team.component.scss']
})
export class InfoTeamComponent {

  @Input('valueForm') valueForm: any;

  constructor() {
  }
}
