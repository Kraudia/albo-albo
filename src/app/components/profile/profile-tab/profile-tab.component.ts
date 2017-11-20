import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';
declare const $: any;

import { CommentService } from '../../../services/comment.service';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question';
import { Comment } from '../../../models/comment';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

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
  public commentsShow = false;
  public throttle = 300;
  public scrollDistance = 0;
  public disableScroll;
  public isLoading = false;

  private index: string;
  private limit = 10;

  constructor(
    private commentService: CommentService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private slimLoadingBarService: SlimLoadingBarService
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

          this.index = null;
          this.questions = null;
          this.comments = null;
          this.commentsShow = false;

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
            this.commentsShow = true;
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
    this.isLoading = true;
    const subscription = this.questionService.getUserQuestions(this.login, this.status, this.index, this.limit)
      .subscribe(
        response => {
          this.questions = response;
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].createdDate;
          }
          this.isLoading = false;
          this.disableScroll = false;
        });
    this.subscription.add(subscription);
  }

  getMoreUserQuestions() {
    this.slimLoadingBarService.start();
    this.isLoading = true;
    this.disableScroll = true;
    const subscription = this.questionService.getUserQuestions(this.login, this.status, this.index, this.limit)
      .subscribe(
        response => {
          response.shift();
          this.questions = [ ...this.questions, ...response];
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].createdDate;
          }
          this.disableScroll = false;
          this.isLoading = false;
          this.slimLoadingBarService.complete();
        },
        err => {
          this.slimLoadingBarService.stop();
        });
    this.subscription.add(subscription);
  }

  getUserComments() {
    this.isLoading = true;
    const subscription = this.commentService.getUserComments(this.login)
      .subscribe(
        response => {
          this.comments = response;
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  onScrollDown() {
    this.getMoreUserQuestions();
  }
}
moment.locale('pl');
