import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../../config/app-const';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/login`,
      {username: username, password: password});
  }

}
