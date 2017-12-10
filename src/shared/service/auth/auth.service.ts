import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConst } from '../../../config/app-const';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // public checkLogin = new BehaviorSubject<string>(localStorage.getItem('token'));

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

  public register(dataUser: any): Observable<any> {
    return this.http.post(`${AppConst.domain}/register`, dataUser);
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

  public getTypeUser(): string {
    return localStorage.getItem('typeUser');
  }

  public setTypeUser(typeUser): void {
    localStorage.setItem('typeUser', typeUser);
  }

  public loginSuccess(fullName, userName, imagesURL, typeUser, token) {
    this.setToken(token);
    this.setFullName(fullName);
    this.setImagesURL(imagesURL);
    this.setTypeUser(typeUser);
    this.setUserName(userName);

    const data = {
      fullName: this.getFullName(),
      userName: this.getUserName(),
      imagesURL: this.getImagesURL(),
      typeUser: this.getTypeUser(),
      token: this.getToken()
    };
  }

  public getDataLogin() {
    return {
      fullName: this.getFullName(),
      userName: this.getUserName(),
      imagesURL: this.getImagesURL(),
      typeUser: this.getTypeUser(),
      token: this.getToken()
    };
  }

}
