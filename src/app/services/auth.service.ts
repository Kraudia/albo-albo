import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { User } from '../models/user';
import { Stats } from '../models/stats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private host = 'https://albo-albo.herokuapp.com';
  private url = {
    login: '/users/login-commands/',
    users: '/users',
    stats: '/stats/',
    pass: '/users/change-password-commands'
  };
  private currentUser;
  private isLogged: boolean;

  constructor(
    private http: Http
  ) {
   this.getCurrentUser();
  }

  private getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLogged = !!this.currentUser;
  }

  public isNotLoggedIn() {
    this.getCurrentUser();
    return !this.isLogged;
  }

  public isLoggedIn() {
    this.getCurrentUser();
    return this.isLogged;
  }

  getHeaders() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      let username = JSON.parse(currentUser).username;
      let password = JSON.parse(currentUser).password;
      headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    return headers;
  }

  getOptions() {
    return new RequestOptions({headers: this.getHeaders()});
  }

  login(username: String, password : String){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));

    let options = new RequestOptions({ headers: headers });

    let url = this.host + this.url.login;
    return this.http.get(url, options)
      .map((res) => {
        let response  = res.json();

        if (response) {
          localStorage.setItem('currentUser', JSON.stringify({
            valid: true,
            username: username,
            password: password
          }));
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.isLogged = true;
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLogged = false;
  }

  getUser(): Observable<User> {
    let url = this.host + this.url.users;
    return this.http.get(url, this.getOptions())
      .map((res) => res.json());
  }

  getUserStats(login: string): Observable<Stats> {
    let url = this.host + this.url.stats;
    return this.http.get(url + login, this.getOptions())
      .map((res) => res.json());
  }

  changePassword(oldPassword: string, newPassword: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.append('Authorization', 'Basic ' + btoa(JSON.parse(localStorage.getItem('currentUser')).username + ':' + oldPassword));

    let options = new RequestOptions({ headers: headers });

    let password = newPassword;
    let url = this.host + this.url.pass;
    return this.http.put(url, JSON.stringify({ password }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
