import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConst } from '../../../config/app-const';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // public checkLogin = new BehaviorSubject<string>(localStorage.getItem('token'));

  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${AppConst.domain}/login`,
      {username: username, password: password});
  }

  public verifyToken(): Observable<any> {
    return this.http.get(`${AppConst.domain}/verify`);
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

  public getUsername(): string {
    return localStorage.getItem('username');
  }

  public setUsername(username): void {
    localStorage.setItem('username', username);
  }

  public setName(name) {
    localStorage.setItem('name', name);
  }

  public getName(): string {
    return localStorage.getItem('name');
  }


  public getImages(): string {
    return localStorage.getItem('images');
  }

  public setImages(images): void {
    localStorage.setItem('images', images);
  }

  public logout(callback?: () => void): void {
    // this.checkLogin.next(null);
    localStorage.clear();
    if (callback) {
      callback();
    }
  }

  public loginSuccess(name, userName, images, token) {
    this.setName(name);
    this.setImages(images);
    this.setToken(token);
    this.setUsername(userName);
  }

  public getDataLogin() {
    return {
      name: this.getName(),
      userName: this.getUsername(),
      token: this.getToken(),
      images: this.getImages(),
    };
  }

}
