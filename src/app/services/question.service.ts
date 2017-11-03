import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { AuthService } from './auth.service';
import { Comment } from '../models/comment';
import { Question } from '../models/question';
import { Tag } from '../models/tag';

@Injectable()
export class QuestionService {
  private host = 'https://albo-albo.herokuapp.com';
  private questionsUrl = '/questions';
  private tagsUrl = '/tags';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getComments(id: string): Observable<Comment[]> {
    const url = this.host + this.questionsUrl + '/' + id + '/comments';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getOneQuestion(id: string): Observable<Question> {
    const url = this.host + this.questionsUrl + '/' + id;
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getTags(): Observable<Tag[]> {
    const url = this.host + this.tagsUrl;
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  postComment(value: string, id: number) {
    const url = this.host + this.questionsUrl + '/' + id + '/comments';
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
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
