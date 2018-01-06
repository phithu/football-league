import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-row-result',
  templateUrl: './row-result.component.html',
  styleUrls: ['./row-result.component.scss']
})
export class RowResultComponent implements OnInit {

  @Input('homeName') public homeName: string;
  @Input('awayName') public awayName: string;
  @Input('homeImg') public homeImg: string;
  @Input('awayImg') public awayImg: string;


  constructor() { }

  ngOnInit() {
  }

}
