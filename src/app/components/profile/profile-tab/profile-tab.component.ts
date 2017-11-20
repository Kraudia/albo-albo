import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
declare const $: any;

import { CommentService } from '../../../services/comment.service';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.scss']
})
export class ProfileTabComponent implements OnInit, OnDestroy {
  public login: string;
  public status: string;
  private subscription = new Subscription();
  public questions: Question[];
  public comments: Comment[];
  private index: string;
  private limit = 10;

  constructor(
    private commentService: CommentService,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.parent &&  this.route.parent.params) {
      const subscription =  this.route.parent.params.subscribe(params => {
        this.login = params['login'];
      });
      this.subscription.add(subscription);
    }

    this.route.params.subscribe(
      params => {
        if (params['status']) {
          const status = params['status'];
          if (status === 'zatwierdzone') {
            this.status = 'ACCEPTED';
            this.getUserQuestions();
          } else if (status === 'oczekujace') {
            this.status = 'PENDING';
            this.getUserQuestions();
          } else if (status === 'zarchiwizowane') {
            this.status = 'REJECTED';
            this.getUserQuestions();
          } else if (status === 'komentarze') {
            this.status = null;
            this.getUserComments();
          } else {
            this.status = null;
            this.getUserQuestions();
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUserQuestions() {
    this.comments = null;
    const subscription = this.questionService.getUserQuestions(this.login, this.status, this.index, this.limit)
      .subscribe(
        response => {
          this.questions = response;
        });
    this.subscription.add(subscription);
  }

  getUserComments() {
    this.questions = null;
    const subscription = this.commentService.getUserComments(this.login)
      .subscribe(
        response => {
          this.comments = response;
        });
    this.subscription.add(subscription);
  }
}
