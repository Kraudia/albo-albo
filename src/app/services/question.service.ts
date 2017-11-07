import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Question } from '../models/question';
import { Tag } from '../models/tag';

@Injectable()
export class QuestionService {
  private host = environment.API_URL;
  private questionsUrl = '/questions';
  private tagsUrl = '/tags';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getOneQuestion(id: string): Observable<Question> {
    const url = this.host + this.questionsUrl + '/' + id;
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getQuestions(adult: string, answered: string, status: string, limit: number, page: number, order: string) {
    // order = (random|((created|accepted|answered)_date|(answer|vote|favourite|comments)_count) (ASC|DESC))
    let url = this.host + 'questions?';
    if (order) {
      url += `&order=${ order }`;
    }
    if (adult) {
      url += `&adult=${ adult }`;
    }
    if (answered) {
      url += `&answered=${ answered }`;
    }
    if (status) {
      url += `&status=${ status }`;
    }
    if (limit) {
      url += `&limit=${ limit }`;
    }
    if (page) {
      url += `&page=${ page }`;
    }

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

  voteQuestion(question: number, vote: number) {
    const url = this.host + '/votes';
    const options = this.authService.getOptions();

    return this.http.post(url, JSON.stringify({ question, vote }), options)
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
