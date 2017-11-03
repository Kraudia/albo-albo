import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import { Stats } from '../models/stats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CurrentUser } from '../models/currentUser';

@Injectable()
export class AuthService {
  private host = 'https://albo-albo.herokuapp.com';
  private url = {
    login: '/users/login-commands/',
    users: '/users',
    stats: '/stats/',
    pass: '/users/change-password-commands'
  };
  private currentUser: CurrentUser;
  private user: User;

  constructor(
    private http: Http
  ) { }

  isLoggedIn() {
    return !!this.currentUser;
  }

  isNotLoggedIn() {
    return !this.currentUser;
  }

  getUserInfo(): Observable<User> {
    const url = this.host + this.url.users;
    return this.http.get(url, this.getOptions())
      .map((res) => res.json());
  }

  getUser() {
    return this.user;
  }

  login(username: String, password: String) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
  const options = new RequestOptions({ headers: headers });

  const url = this.host + this.url.login;
  return this.http.get(url, options)
    .map((res) => {
      const response  = res.json();

      if (response) {
        localStorage.setItem('currentUser', JSON.stringify({
          username: username,
          password: password
        }));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.getUserInfo()
          .subscribe(
            user => {
              this.user = user;
            });
      }
    });
  }

  loginCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const username = JSON.parse(currentUser).username;
      const password = JSON.parse(currentUser).password;
      this.login(username, password)
        .subscribe(
          () => {},
          () => {
            this.logout();
          }
        );
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  getUserStats(login: string): Observable<Stats> {
    const url = this.host + this.url.stats;
    return this.http.get(url + login, this.getOptions())
      .map((res) => res.json());
  }

  changePassword(oldPassword: string, newPassword: string) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.append('Authorization', 'Basic ' + btoa(JSON.parse(localStorage.getItem('currentUser')).username + ':' + oldPassword));

    const options = new RequestOptions({ headers: headers });

    const password = newPassword;
    const url = this.host + this.url.pass;
    return this.http.put(url, JSON.stringify({ password }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getHeaders() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (this.currentUser) {
      const username = this.currentUser.username;
      const password = this.currentUser.password;
      headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    return headers;
  }

  getOptions() {
    return new RequestOptions({headers: this.getHeaders()});
  }

  private extractData(res: Response) {
    const body = res.json();
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
