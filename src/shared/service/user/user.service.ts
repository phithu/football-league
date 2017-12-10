import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../../config/app-const';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-users`, {});
  }
}
