import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss']
})
export class ViewInfoComponent {

  @Input('dataUser') dataUser: any;

  constructor() {
  }


}
