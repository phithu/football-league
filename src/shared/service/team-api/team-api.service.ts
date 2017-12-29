import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '../../../config/app-const';

let newHeaders = new HttpHeaders();
newHeaders = newHeaders.set('Content-Type', 'application/json');

@Injectable()
export class TeamApiService {


  constructor(private http: HttpClient) {
  }

  public insertTeam(team): Observable<any> {
    return this.http.post(`${AppConst.java}/team/add`, team, {
      headers: newHeaders
    });
  }

  public getAllTeam(): Observable<any> {
    return this.http.get(`${AppConst.java}/team`);
  }

  public deleteTeam(idTeam: string): Observable<any> {
    return this.http.post(`${AppConst.java}/team/delete`, {idTeam}, {
      headers: newHeaders
    });
  }

  public insertListPlayer(listPlayer): Observable<any> {
    return this.http.post(`${AppConst.java}/player/add`, listPlayer, {
      headers: newHeaders
    });
  }
}
