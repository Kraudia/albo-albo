import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  private usersUrl = 'https://albo-albo.herokuapp.com/users';

  constructor(private http: Http) { }

  register(login: string, email: string, password: string, birthDate: string) {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.usersUrl, JSON.stringify({ login, email, password, birthDate }), options)
      .map(this.extractData)
      .catch(this.handleError);
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
