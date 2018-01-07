import { Component, Input, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.scss']
})
export class ScrollableListComponent implements OnChanges, OnDestroy {
  @Input('btnFirst') btnFirst: string;
  @Input('btnSecond') btnSecond: string;
  @Input('adult') adult: string;
  @Input('answered') answered: string;
  @Input('limit') limit: number;
  @Input('order') order: string;
  @Input('status') status: string;
  @Input('tag') tag: number;

  public throttle = 300;
  public scrollDistance = 0;
  public disableScroll;
  public questions: Question[];
  public isLoading = false;

  private index: string;
  private subscription = new Subscription();

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private questionService: QuestionService
  ) { }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
    this.index = null;
    this.questions = null;
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getQuestions() {
    this.isLoading = true;
    const subscription = this.questionService.getQuestions(this.adult, this.answered, this.index, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          this.questions = response;
          if (this.questions.length > 0) {
            if (this.order === 'accepted_date DESC' || this.order === 'accepted_date ASC') {
              this.index = this.questions[this.questions.length - 1].acceptedDate;
            } else if (this.order === 'created_date DESC' || this.order === 'created_date ASC') {
              this.index = this.questions[this.questions.length - 1].createdDate;
            } else {
              this.index = this.questions.length.toString();
            }
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

  getMoreQuestions() {
    this.slimLoadingBarService.start();
    this.isLoading = true;
    this.disableScroll = true;
    const subscription = this.questionService.getQuestions(this.adult, this.answered, this.index, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          if (this.order === 'accepted_date DESC' || this.order === 'accepted_date ASC') {
            response.shift();
            this.questions = [ ...this.questions, ...response];
            this.index = this.questions[this.questions.length - 1].acceptedDate;
          } else if (this.order === 'created_date DESC' || this.order === 'created_date ASC') {
            response.shift();
            this.questions = [ ...this.questions, ...response];
            this.index = this.questions[this.questions.length - 1].createdDate;
          } else {
            this.questions = [ ...this.questions, ...response];
            this.index = this.questions.length.toString();
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

  onScrollDown() {
    this.getMoreQuestions();
  }
}
