import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamApiService } from '@shared/service/team-api';
import { TitleAppService } from '@shared/module/title-app';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public playerInfo: any;

  constructor(private activatedRoute: ActivatedRoute,
              private titleAppService: TitleAppService,
              private teamApiService: TeamApiService) {
  }

  public ngOnInit() {
    this.getPlayerById();
  }

  public getPlayerById() {
    this.activatedRoute.queryParams
      .do(value => this.titleAppService.setTitle(`Tìm kiếm cầu thủ ${value.namePlayer}`))
      .switchMap((params) => this.teamApiService
        .getGoalNumberPlayer(params.idTeam, params.idPlayer, params.namePlayer))
      .subscribe((response) => {
        if (response.result) {
          const {data} = response;
          console.log(response);
          this.playerInfo = data;
          // this.responseAPI = data;
          // this.valuePlayer = data.player[0];
          // this.form.patchValue(this.valuePlayer);
          // this.getRule();
        }
      });
  }

}
