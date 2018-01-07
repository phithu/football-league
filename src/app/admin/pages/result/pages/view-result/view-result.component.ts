import {
  Component,
  OnInit
} from '@angular/core';

import { TitleAppService } from '@shared/module/title-app';
import { ResultApiService } from '@shared/service/result-api';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  public listWeek: Array<any>;
  public listResult: Array<any>;
  public selectedOption;
  public isCallAPI: boolean; // CHECK WHETHER CALLED API
  constructor(private titleAppService: TitleAppService,
              private resultApiService: ResultApiService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Xem kết quả trận đấu');
    this.getResult();
  }

  public getResult() {
    this.resultApiService.getResult()
      .subscribe((response) => {
        const {result, data} = response;
        if (result) {
          this.listWeek = data;
          const lengthWeek = this.listWeek.length;
          this.selectedOption = (lengthWeek).toString();
          this.listResult = this.listWeek[lengthWeek - 1].listFormMatch;
          this.isCallAPI = true;
        }
      });
  }

  public onSelectWeek(value) {
    const index = parseInt(value) - 1;
    this.listResult = this.listWeek[index].listFormMatch;
  }

}
