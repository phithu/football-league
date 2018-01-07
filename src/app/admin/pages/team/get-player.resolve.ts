import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { TeamApiService } from '@shared/service/team-api';


@Injectable()
export class GetPlayerResolve implements Resolve<any> {
  constructor(private teamApiService: TeamApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const idPlayer = route.queryParamMap.get('idPlayer');
    const idTeam = route.queryParamMap.get('idTeam');
    return this.teamApiService.getPlayer(idTeam, idPlayer)
      .map(response => {
        console.log('response', response);
        if (response.result) {
          // console.log('response', response);
          return response;
        }
        this.router.navigate(['/']);
        return null;
      });
  }
}
