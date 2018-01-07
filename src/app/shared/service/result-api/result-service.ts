import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '@config/app-const';


@Injectable()
export class ResultApiService {

  constructor(private http: HttpClient) {
  }

  public getResult(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-result`, {});
  }

  public insertResult(week, listFormMatch): Observable<any> {
    return this.http.post(`${AppConst.domain}/insert-result`, {
      week,
      listFormMatch
    });
  }


}
