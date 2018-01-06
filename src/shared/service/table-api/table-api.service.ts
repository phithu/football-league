import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConst } from '../../../config/app-const';


@Injectable()
export class TableApiService {

  constructor(private http: HttpClient) {
  }

  public getTable(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-table`, {});
  }

  public insertTable(week, listFormMatch): Observable<any> {
    return this.http.post(`${AppConst.domain}/insert-table`, {
      week,
      listFormMatch
    });
  }

  public updateTable(week, listFormMatch): Observable<any> {
    return this.http.post(`${AppConst.domain}/update-table`, {
      week,
      listFormMatch
    });
  }


}
