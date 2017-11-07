import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit, OnDestroy {
  @Input('adult') adult: string;
  @Input('answered') answered: string;
  @Input('status') status: string;
  @Input('limit') limit = 5;
  @Input('page') page: number;
  @Input('order') order: string;

  private subscription = new Subscription();
  public questions: Question[];

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getQuestions() {
    const subscription = this.questionService.getQuestions(this.adult, this.answered, this.status, this.limit, this.page, this.order)
        .subscribe(
          response => {
            this.questions = response;
          });
    this.subscription.add(subscription);
  }
}
