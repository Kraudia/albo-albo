import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {
  private host = environment.API_URL;

  constructor(private http: Http) { }

  register(login: string, email: string, password: string, showAdult: boolean) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const url = this.host + 'users';
    const options = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify({ login, email, password, showAdult }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  afterRegister(adult: boolean) {
    const url = this.host;
    if (adult) {
      const url = this.host + 'user/show-adult-commands';
    } else {
      const url = this.host + 'user/hide-adult-commands';
    }
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkLogin(login: string) {
    const url = this.host + `test/users?login=${login}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  checkEmail(email: string) {
    const url = this.host + `test/users?email=${email}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status === 204) {
      return { };
    }
    const body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = body.message ?  body.message : `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
