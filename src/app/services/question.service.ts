import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { AuthService } from './auth.service';
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


}
