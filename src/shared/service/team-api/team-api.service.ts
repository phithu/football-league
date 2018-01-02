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
    return this.http.post(`${AppConst.domain}/insert-team`, team);
  }

  public getAllTeam(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-all-teams`, {});
  }

  public getTeamId(idTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-team`, {idTeam});
  }

  public deleteTeam(idTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/delete-team`, {idTeam});
  }

  public checkTeam(nameTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/check-team`, {nameTeam});
  }

  public updateTeam(idTeam, dataUpdate): Observable<any> {
    return this.http.post(`${AppConst.domain}/update-team`, {
      idTeam,
      dataUpdate
    });
  }


}
