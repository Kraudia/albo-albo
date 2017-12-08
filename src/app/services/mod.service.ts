import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Question } from '../models/question';
import { ReportedQuestion } from '../models/reportedQuestion';
import { ReportedComment } from '../models/reportedComment';

@Injectable()
export class ModService {
  private host = environment.API_URL;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getReportedQuestions(): Observable<ReportedQuestion[]> {
    const url = this.host + 'reports/questions';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getReportedComments(): Observable<ReportedComment[]> {
    const url = this.host + 'reports/comments';
    const options = this.authService.getOptions();

    return this.http.get(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  editReportedQuestion(id: number, value: string, firstAnswer: string, secondAnswer: string, status: string, adultRated: boolean, shortLink: string) {
    const url = this.host + 'questions/' + id + '/edit-question-commands';
    const options = this.authService.getOptions();

    let json = {};
    if (value) {
      json['value'] = value;
    }
    if (firstAnswer) {
      json['firstAnswer'] = firstAnswer;
    }
    if (secondAnswer) {
      json['secondAnswer'] = secondAnswer;
    }
    if (status) {
      json['status'] = status;
    }
    if (adultRated) {
      json['adultRated'] = adultRated;
    }
    if (shortLink) {
      json['shortLink'] = shortLink;
    }

    return this.http.patch(url,  JSON.stringify(json), options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  editReportedComment(questionId: number, commentId: number,  value: string) {
    const url = this.host + 'questions/' + questionId + '/comments/' + commentId + '/edit-comment-commands';
    const options = this.authService.getOptions();

    return this.http.patch(url,  JSON.stringify({ value }), options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  deleteComment(questionId: number, commentId: number) {
    const url = this.host + 'questions/' + questionId + '/comments/' + commentId + '/edit-comment-commands';
    const options = this.authService.getOptions();

    return this.http.patch(url,  JSON.stringify({ visible: false }), options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  deleteReportedQuestion(id: number) {
    const url = this.host + 'reports/questions/' + id;
    const options = this.authService.getOptions();

    return this.http.delete(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  deleteReportedComment(id: number) {
    const url = this.host + 'reports/comments/' + id;
    const options = this.authService.getOptions();

    return this.http.delete(url, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  accept(question: Question) {
    const url = this.host + 'questions/' + question.id + '/accept-question-commands';
    const options = this.authService.getOptions();

    return this.http.patch(url, JSON.stringify({}), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addTag(question: number, id: number) {
    const url = this.host + 'questions/' + question + '/tags';
    const options = this.authService.getOptions();

    return this.http.post(url, JSON.stringify({ id }), options)
      .map((result: Response) => result)
      .catch(this.handleError);
  }

  deleteTag(question: number, id: number) {
    const url = this.host + 'questions/' + question + '/tags';
    const headers = this.authService.getHeaders();
    const body = JSON.stringify({id });
    const options = new RequestOptions({
      headers: headers,
      body : body
    });

    return this.http.delete(url, options)
      .map((result: Response) => result)
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
