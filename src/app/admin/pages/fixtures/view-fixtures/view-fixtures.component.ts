import { Component, OnInit } from '@angular/core';
import { TitleAppService } from '../../../../../shared/module/title-app';

@Component({
  selector: 'app-view-fixtures',
  templateUrl: './view-fixtures.component.html',
  styleUrls: ['./view-fixtures.component.scss']
})
export class ViewFixturesComponent implements OnInit {

  constructor(private titleAppService: TitleAppService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Xem lịch thi đấu');
  }

}
