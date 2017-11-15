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

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }


  answerQuestion(question: number, answer: number) {
    const url = this.host + 'answers';
    const options = this.authService.getOptions();

    return this.http.post(url, JSON.stringify({question, answer}), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getOneQuestion(id: string): Observable<Question> {
    const url = this.host + 'questions/' + id;
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getQuestions(adult: string, answered: string, index: string, limit: number, order: string, status: string, tag: number) {
    let url = this.host + 'questions?';
    if (adult) {
      url += `&adult=${ adult }`;
    }
    if (answered) {
      url += `&answered=${ answered }`;
    }
    if (index) {
      url += `&index=${ index }`;
    }
    if (limit) {
      url += `&limit=${ limit }`;
    }
    if (order) {
      // order = (random|((created|accepted|answered)_date|(answer|vote|favourite|comments)_count) (ASC|DESC))
      url += `&order=${ order }`;
    }
    if (status) {
      url += `&status=${ status }`;
    }
    if (tag) {
      url += `&tag=${ tag }`;
    }

    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getTopQuestions(type: string): Observable<Question[]> {
    const url = this.host + 'top?type=' + type;
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getTags(): Observable<Tag[]> {
    const url = this.host + 'tags';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  voteQuestion(question: number, vote: number) {
    const url = this.host + 'votes';
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
