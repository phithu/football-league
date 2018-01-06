import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-fixtures-result-row',
  templateUrl: './fixtures-result-row.component.html',
  styleUrls: ['./fixtures-result-row.component.scss']
})
export class FixturesResultRowComponent {

  @Input('homeName') public homeName: string;
  @Input('awayName') public awayName: string;
  @Input('homeImg') public homeImg: string;
  @Input('awayImg') public awayImg: string;
  @Input('dateTime') public dateTime: string;
  @Input('stadium') public stadium: string;
  @Input('type') public type; // type: result or fixtures
  @Input('soccer') public soccer: string;
  @Input('listGoal') public listGoal;
}
