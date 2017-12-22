import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Log } from '../models/log';
import { User } from '../models/user';

@Injectable()
export class AdminService {
  private host = environment.API_URL;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getActions(limit: number, userId: number, info: string, status: string, name: string, id: number): Observable<Log[]> {
    let url = this.host + 'actions?limit=' + limit;
    const options = this.authService.getOptions();

    if (userId) {
      url += `&userId=${ userId }`;
    }
    if (info) {
      url += `&info=${ info }`;
    }
    if (status) {
      url += `&status=${ status }`;
    }
    if (name) {
      url += `&name=${ name }`;
    }
    if (id) {
      url += `&id=${ id }`;
    }

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getUsers(active: boolean, banned: boolean, userLogin: string): Observable<User[]> {
    let url = this.host + 'users?all=true';
    const options = this.authService.getOptions();

    if (active || active === false) {
      url += `&active=${ active }`;
    }
    if (banned || banned === false) {
      url += `&banned=${ banned }`;
    }
    if (userLogin) {
      url += `&userLogin=${ userLogin }`;
    }

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
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
