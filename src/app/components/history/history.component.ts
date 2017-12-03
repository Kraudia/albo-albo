import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private index: string;

  public isLoading = false;
  public questions: Question[] = null;
  public order = 'answered_date DESC';
  public throttle = 300;
  public scrollDistance = 0;
  public disableScroll;

  constructor(
    private questionService: QuestionService,
    private slimLoadingBarService: SlimLoadingBarService,
    private titleService: Title
  ) { }

  ngOnInit() {
    const title = `Historia - Albo Albo`;
    this.titleService.setTitle(title);
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getQuestions() {
    this.isLoading = true;
    this.slimLoadingBarService.start();
    this.disableScroll = true;
    const subscription = this.questionService.getQuestions(null, 'true', this.index, 10, this.order, null, null)
      .subscribe(
        response => {
          if (this.questions) {
            if (this.index) {
              response.shift();
            }
            this.questions = [ ...this.questions, ...response];
          } else {
            this.questions = response;
          }
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].answeredDate;
          }
          this.disableScroll = false;
          this.isLoading = false;
          this.slimLoadingBarService.complete();
        },
        err => {
          this.slimLoadingBarService.complete();
        });
    this.subscription.add(subscription);
  }

  onScrollDown() {
    this.getQuestions();
  }

  sortBy(sort: string) {
    if (sort !== this.order) {
      this.subscription.unsubscribe();
      this.subscription = new Subscription();
      this.index = null;
      this.questions = null;
      this.getQuestions();
    }
  }
}
