import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-fixtures-row',
  templateUrl: './fixtures-row.component.html',
  styleUrls: ['./fixtures-row.component.scss']
})
export class FixturesRowComponent implements OnInit {

  @Input('homeName') public homeName: string;
  @Input('awayName') public awayName: string;
  @Input('homeImg') public homeImg: string;
  @Input('awayImg') public awayImg: string;
  @Input('dateTime') public dateTime: string;
  @Input('stadium') public stadium: string;

  constructor() { }

  ngOnInit() {
  }

}
