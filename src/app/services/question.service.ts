import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';

import { Comment } from '../models/comment';
import { Question } from '../models/question';
import { Tag } from '../models/tag';
import { options } from './options';

@Injectable()
export class QuestionService {
  private host = 'https://albo-albo.herokuapp.com';
  private questionsUrl = '/questions';
  private tagsUrl = '/tags';

  constructor(
    private http: Http
  ) { }

  getComments(id: string): Observable<Comment[]> {
    const url = this.host + this.questionsUrl + '/' + id + '/comments';

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getOneQuestion(id: string): Observable<Question> {
    const url = this.host + this.questionsUrl + '/' + id;

    return this.http.get(url, options)
      .map((res) => res.json());
  }

  getTags(): Observable<Tag[]> {
    const url = this.host + this.tagsUrl;

    return this.http.get(url, options)
      .map((res) => res.json());
  }
}
