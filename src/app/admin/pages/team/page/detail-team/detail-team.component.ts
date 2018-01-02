import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Router
} from '@angular/router';

import { TitleAppService } from '../../../../../../shared/module/title-app';
import { TeamApiService } from '../../../../../../shared/service/team-api';
import { RuleApiService } from '../../../../../../shared/service/rule-api';


@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {

  public valueTeam: any;
  public rulePlayer: any;


  constructor(private ruleApiService: RuleApiService,
              private teamApiService: TeamApiService,
              private router: Router,
              private titleAppService: TitleAppService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.getTeamById();
    this.getRule();
  }

  public getRule() {
    this.ruleApiService.getRule()
      .subscribe((response: any) => {
        if (response.result) {
          const {player} = response.data[0];
          this.rulePlayer = player;
        }
      });
  }

  public getTeamById() {
    this.activatedRoute.data
      .map(value => value.data)
      .subscribe((response) => {
        if (response.result) {
          const {nameTeam, imagesURL, stadium, _id, player} = response.data;
          this.valueTeam = {
            team: {
              nameTeam,
              imagesURL,
              stadium,
              _id
            },
            player
          };
          this.titleAppService.setTitle(`Chỉnh sửa thông tin đội bóng ${nameTeam}`);
        }
      });
  }

  public editTeam() {
    const {_id} = this.valueTeam.team;
    this.router.navigate(['', 'team', 'edit-team', _id]);
  }

  public editPlayer(player: any) {
    const idPlayer = player._id;
    const idTeam = this.valueTeam.team._id;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        idTeam,
        idPlayer
      },
    };

    this.router.navigate(['', 'team', 'edit-player'], navigationExtras);
  }

  public deletePlayer(player: any) {

  }


}
