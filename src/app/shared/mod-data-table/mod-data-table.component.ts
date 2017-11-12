import { Component, Input, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-mod-data-table',
  templateUrl: 'mod-data-table.component.html',
  styleUrls: ['mod-data-table.component.scss']
})
export class ModDataTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input('adult') adult: string;
  @Input('limit') limit: 10;
  @Input('order') order: string;
  @Input('tag') tag: number;

  public questions: Question[] = [];
  public questionCount = 0;
  private subscription = new Subscription();
  private questionResource = new DataTableResource([]);
  private status = 'PENDING';

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
    this.questions = null;
    this.getQuestions();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reload(params) {
    this.questionResource.query(params).then(questions => this.questions = questions);
  }

  getQuestions() {
    const subscription = this.questionService.getQuestions(this.adult, null, null, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          this.questions = response;
          this.questionResource = new DataTableResource(this.questions);
          this.questionResource.count().then(count => this.questionCount = count);
        });
    this.subscription.add(subscription);
  }

  accept(question: Question) {
    question.status = 'ACCEPTED';
    console.log('zaakceptowano', question);
  }

  editTags(question: Question) {
    console.log('tagi', question);
  }

  reject(question: Question) {
    question.status = 'REJECTED';
    console.log('odrzucono', question);
  }

  rowColors(question) {
    if (question.status === 'ACCEPTED') {
      return 'rgb(196, 241, 197)';
    } else if (question.status === 'REJECTED') {
      return 'rgb(255, 218, 234)';
    }
  }
}
