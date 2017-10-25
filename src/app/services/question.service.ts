import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Question } from '../models/question';
import { options } from '../common/options';

@Injectable()
export class QuestionService {
  private host = 'https://albo-albo.herokuapp.com';
  private questionsUrl = '/questions';

  constructor(
    private http: Http
  ) { }

  getOneQuestion(id: number): Observable<Question> {
    const url = this.host + this.questionsUrl + '/' + id;

    return this.http.get(url, options)
      .map((res) => res.json());
  }
}
