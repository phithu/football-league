import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '@config/app-const';


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

  public getPlayer(idTeam, idPlayer): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-player`, {
      idTeam,
      idPlayer
    });
  }

  public insertPlayer(idTeam, dataInsert): Observable<any> {
    return this.http.post(`${AppConst.domain}/insert-player`, {
      idTeam,
      dataInsert
    });
  }

  public updatePlayer(idTeam, idPlayer, dataUpdate): Observable<any> {
    return this.http.post(`${AppConst.domain}/update-player`, {
      idTeam,
      idPlayer,
      dataUpdate
    });
  }

  public deletePlayer(idTeam, idPlayer): Observable<any> {
    return this.http.post(`${AppConst.domain}/delete-player`, {
      idTeam,
      idPlayer,
    });
  }

  public searchPlayer(namePlayer): Observable<any> {
    return this.http.post(`${AppConst.domain}/search-player`, {
      namePlayer
    });
  }

  public getStadium(nameTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-stadium`, {
      nameTeam
    });
  }

  public getLogoTeam(nameTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-team-logo`, {
      nameTeam
    });
  }

  public getNumberForeign(idTeam): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-number-foreign-player`, {
      idTeam
    });
  }

  public getGoalNumberPlayer(idTeam, idPlayer, namePlayer): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-goal-player`, {
      idTeam,
      idPlayer,
      namePlayer
    });
  }
}
