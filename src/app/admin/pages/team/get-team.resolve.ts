import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { TeamApiService } from '@shared/service/team-api';


@Injectable()
export class GetTeamResolve implements Resolve<any> {
  constructor(private teamApiService: TeamApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const idTeam = route.paramMap.get('id');
    return this.teamApiService.getTeamId(idTeam)
      .map(response => {
        if (response.result) {
          return response;
        }
        this.router.navigate(['/']);
        return null;
      });
  }
}
