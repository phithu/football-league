import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '../../../config/app-const';


@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public register(dataUser: any): Observable<any> {
    return this.http.post(`${AppConst.domain}/register`, dataUser);
  }

  public getAllUsers(): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-users`, {});
  }

  public deleteUserID(userID: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/delete-user`, {
      userID
    });
  }

  public getUserByID(userID: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/get-user`, {
      userID
    });
  }

  public updateUserByID(userID: string, fullName: string, userName: string, imagesURL: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/update-user`, {
      userID,
      fullName,
      userName,
      imagesURL
    }).do(() => this.alterUpdate(fullName, userName, imagesURL));
  }

  public alterUpdate(fullName, userName, imagesURL) {
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('imagesURL', imagesURL);
  }
}
