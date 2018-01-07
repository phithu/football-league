import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConst } from '@config/app-const';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }
  public login(userName: string, password: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/login`,
      {userName: userName, password: password});
  }

  public logout(): Observable<any> {
    return this.http.post(`${AppConst.domain}/logout`, {});
  }

  public verifyToken(): Observable<any> {
    return this.http.post(`${AppConst.domain}/verify`, {});
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {

    localStorage.setItem('token', token);
  }

  public getUserName(): string {
    return localStorage.getItem('userName');
  }

  public setUserName(userName): void {
    localStorage.setItem('userName', userName);
  }

  public getUserID(): string {
    return localStorage.getItem('userID');
  }

  public setUserID(userID): void {
    localStorage.setItem('userID', userID);
  }

  public setFullName(fullName) {
    localStorage.setItem('fullName', fullName);
  }

  public getFullName(): string {
    return localStorage.getItem('fullName');
  }


  public getImagesURL(): string {
    return localStorage.getItem('imagesURL');
  }

  public setImagesURL(imagesURL): void {
    localStorage.setItem('imagesURL', imagesURL);
  }

  public setIDImages(idImages): void {
    localStorage.setItem('idImages', idImages);
  }

  public getIDImages(): string {
    return localStorage.getItem('idImages');
  }

  public getTypeUser(): string {
    return localStorage.getItem('typeUser');
  }

  public setTypeUser(typeUser): void {
    localStorage.setItem('typeUser', typeUser);
  }

  public loginSuccess(userID, fullName, userName, imagesURL, idImages, typeUser, token) {

    this.setUserID(userID);
    this.setFullName(fullName);
    this.setUserName(userName);
    this.setImagesURL(imagesURL);
    this.setIDImages(idImages);
    this.setTypeUser(typeUser);
    this.setToken(token);
  }

  public getDataLogin() {
    return {
      userID: this.getUserID(),
      fullName: this.getFullName(),
      userName: this.getUserName(),
      imagesURL: this.getImagesURL(),
      idImages: this.getIDImages(),
      typeUser: this.getTypeUser(),
      token: this.getToken()
    };
  }

}
