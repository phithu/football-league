import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '../../../config/app-const';


@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-users`, {});
  }

  public deleteUserID(userID: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/delete-user`, {
      userID
    });
  }
}
