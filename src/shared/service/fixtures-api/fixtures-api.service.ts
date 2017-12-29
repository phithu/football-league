import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '../../../config/app-const';

@Injectable()
export class FixturesApiService {


  constructor(private http: HttpClient) {
  }

  public getAllFixtures(): Observable<any> {
    return null;
  }

  public insertFixtures(data): Observable<any> {
    return this.http.post(`${AppConst.domain}/insert-fixtures`, data);
  }


}
