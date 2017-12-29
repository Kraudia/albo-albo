import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
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
 public error;
  public login: string;
  public status: string;
  public adult: string;
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
    private router: Router,
    private slimLoadingBarService: SlimLoadingBarService,
    private titleService: Title,
    private toastrService: ToastrService
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
            this.setTitle('Zatwierdzone pytania');
            this.getUserQuestions();
          } else if (status === 'oczekujace') {
            this.status = 'PENDING';
            this.setTitle('Oczekujące pytania');
            this.getUserQuestions();
          } else if (status === 'odrzucone') {
            this.status = 'REJECTED';
            this.setTitle('Odrzucone pytania');
            this.getUserQuestions();
          } else if (status === 'komentarze') {
            this.status = null;
            this.getUserComments();
            this.setTitle('Komentarze');
            this.commentsShow = true;
          } else {
            this.router.navigate(['profil', this.login], {replaceUrl: true});
            this.status = null;
            this.setTitle('Profil');
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
    this.adult = localStorage.getItem('isAdult');
    const subscription = this.questionService.getUserQuestions(this.login, this.adult, this.status, this.index, this.limit)
      .subscribe(
        response => {
          this.questions = response;
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].createdDate;
          }
          this.isLoading = false;
          this.disableScroll = false;
        },
      error => {
        this.isLoading = false;
        this.disableScroll = false;
        this.toastrService.error(error);
        this.error = error;
      });
    this.subscription.add(subscription);
  }

  getMoreUserQuestions() {
    this.slimLoadingBarService.start();
    this.isLoading = true;
    this.disableScroll = true;
    this.adult = localStorage.getItem('isAdult');
    const subscription = this.questionService.getUserQuestions(this.login, this.adult, this.status, this.index, this.limit)
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
        error => {
          this.disableScroll = false;
          this.isLoading = false;
          this.slimLoadingBarService.stop();
          this.toastrService.error(error);
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
        },
      error => {
        this.isLoading = false;
        this.toastrService.error(error);
      });
    this.subscription.add(subscription);
  }

  setTitle(status) {
    const title = `${status} użytkownika ${this.login} - Albo Albo`;
    this.titleService.setTitle(title);
  }

  onScrollDown() {
    this.getMoreUserQuestions();
  }
}
moment.locale('pl');
