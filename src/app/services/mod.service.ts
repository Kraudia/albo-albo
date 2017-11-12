import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Question } from '../models/question';

@Injectable()
export class ModService {
  private host = environment.API_URL;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  accept(question: Question) {
    const url = this.host + 'questions/' + question.id + '/accept-question-commands';
    const options = this.authService.getOptions();

    return this.http.patch(url, JSON.stringify({}), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  reject(question: Question) {
    const url = this.host + 'questions/' + question.id + '/reject-question-commands';
    const options = this.authService.getOptions();

    return this.http.patch(url, JSON.stringify({}), options)
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
