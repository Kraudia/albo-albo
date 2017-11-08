import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.scss']
})
export class ScrollableListComponent implements OnInit, OnChanges, OnDestroy {
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

  private index: string;
  private subscription = new Subscription();

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getQuestions();
  }

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
    const subscription = this.questionService.getQuestions(this.adult, this.answered, this.index, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          this.questions = response;
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].createdDate;
          }
          this.disableScroll = false;
        });
    this.subscription.add(subscription);
  }

  getMoreQuestions() {
    this.disableScroll = true;
    const subscription = this.questionService.getQuestions(this.adult, this.answered, this.index, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          response.shift();
          this.questions = [ ...this.questions, ...response];
          this.index = this.questions[this.questions.length - 1].createdDate;
          this.disableScroll = false;
        });
    this.subscription.add(subscription);
  }


  onScrollDown() {
    this.getMoreQuestions();
  }
}
