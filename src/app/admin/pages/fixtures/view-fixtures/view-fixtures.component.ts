import {
  Component,
  OnInit
} from '@angular/core';
import { TitleAppService } from '../../../../../shared/module/title-app';
import { FixturesApiService } from '../../../../../shared/service/fixtures-api';

@Component({
  selector: 'app-view-fixtures',
  templateUrl: './view-fixtures.component.html',
  styleUrls: ['./view-fixtures.component.scss']
})
export class ViewFixturesComponent implements OnInit {

  public listFixtures: Array<any>;
  public listMatch: Array<any>;
  public selectedOption;
  public isCallAPI: boolean; // CHECK WHETHER CALLED API
  constructor(private titleAppService: TitleAppService,
              private fixturesApiService: FixturesApiService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Xem lịch thi đấu');
    this.getAllFixtures();
  }

  public getAllFixtures() {
    this.fixturesApiService.getAllFixtures()
      .subscribe((response) => {
        const {result, data} = response;
        if (result && data) {
          this.listFixtures = data;
          const lengthFixtures = this.listFixtures.length;
          this.isCallAPI = true;
          this.selectedOption = (lengthFixtures).toString();
          this.listMatch = this.listFixtures[lengthFixtures - 1];
        }
      });
  }

  public onSelectWeek(value) {
    const index = parseInt(value) - 1;
    this.listMatch = this.listFixtures[index];
  }

}
