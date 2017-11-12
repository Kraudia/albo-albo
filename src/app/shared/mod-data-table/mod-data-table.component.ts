import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-4-data-table-bootstrap-4';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-mod-data-table',
  templateUrl: 'mod-data-table.component.html',
  styleUrls: ['mod-data-table.component.scss']
})
export class ModDataTableComponent implements OnInit, OnDestroy {

  public questions: Question[] = [];
  private subscription = new Subscription();
  private questionResource = new DataTableResource([]);
  questionCount = 0;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reload(params) {
    this.questionResource.query(params).then(questions => this.questions = questions);
  }

  getQuestions() {
    const subscription = this.questionService.getQuestions(null, null, null, null, null, 'PENDING', null)
      .subscribe(
        response => {
          this.questions = response;
          this.questionResource = new DataTableResource(this.questions);
          this.questionResource.count().then(count => this.questionCount = count);
        });
    this.subscription.add(subscription);
  }

  accept(question: Question) {
    console.log('zaakceptowano', question);
  }

  reject(question: Question) {
    console.log('odrzucono', question);
  }
}
