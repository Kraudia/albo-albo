import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Comment } from '../models/comment';

@Injectable()
export class CommentService {
  private host = environment.API_URL;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getComments(idQuestion: number): Observable<Comment[]> {
    const url = this.host + 'questions/' + idQuestion + '/comments';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getUserComments(login: string): Observable<Comment[]> {
    const url = this.host + 'users/' + login + '/comments';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  postComment(idQuestion: number, value: string) {
    const url = this.host + 'questions/' + idQuestion + '/comments';
    const options = this.authService.getOptions();

    return this.http.post(url, JSON.stringify({ value }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  voteComment(idQuestion: number, idComment: number, value: number) {
    const url = this.host + 'questions/' + idQuestion + '/comments/' + idComment + '/rank';
    const options = this.authService.getOptions();

    return this.http.post(url, JSON.stringify({ value }), options)
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
      errMsg = body.message ?  body.message : `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
