import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-4-data-table-bootstrap-4';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';
import { ModService } from '../../services/mod.service';
import { Tag } from '../../models/tag';

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
  @ViewChild(DataTable) questionsTable: DataTable;

  private selectedQuestion: Question;
  private selectedTags: {
    id: number;
    name: string;
  }[] = [];
  public tags: Tag[] = [];

  public questions: Question[] = [];
  public questionCount = 0;
  private subscription = new Subscription();
  private questionResource = new DataTableResource([]);
  private status = 'PENDING';

  constructor(
    private modService: ModService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getQuestions();
    this.getTags();
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

  getTags() {
    this.questionService.getTags()
      .subscribe(
        res => {
          this.tags = res;
        });
  }

  editTags(question: Question) {
    this.selectedQuestion = question;
    this.selectedTags = [];

    if (question.tags) {
      for (const tag of question.tags) {
        this.selectedTags.push({
          id: tag.id,
          name: tag.name
        });
      }
    }
  }

  editTagsDone() {
    if (this.selectedQuestion.tags) {
      for (const tag of this.selectedQuestion.tags) {
        this.modService.deleteTag(this.selectedQuestion.id, tag.id)
          .subscribe(() => {});
      }
    }

    if (this.selectedTags.length) {
      for (const tag of this.selectedTags) {
        this.modService.addTag(this.selectedQuestion.id, tag.id)
          .subscribe(() => {});
      }
    }

    for (let i = 0; i < this.questionsTable.items.length; i++) {
      if (this.questionsTable.items[i].id === this.selectedQuestion.id) {
        this.questionsTable.items[i].tags = this.selectedTags;
      }
    }

    this.selectedQuestion = null;
    this.selectedTags = null;
  }

  editTagsCancel() {
    this.selectedQuestion = null;
    this.selectedTags = null;
  }

  accept(question: Question) {
    this.modService.accept(question)
      .subscribe(
        res => {
          question.status = 'ACCEPTED';
        },
      error => {
          console.log('error = ', error);
      });
  }

  reject(question: Question) {
    this.modService.reject(question)
      .subscribe(
        res => {
          question.status = 'REJECTED';
        },
        error => {
          console.log('error = ', error);
        });
  }

  isTagSelected(id: number) {
    if (this.selectedTags) {
      for (const tag of this.selectedTags) {
        if (id === tag.id) {
          return true;
        }
      }
    }
    return false;
  }

  selectTag(tag: Tag) {
    if (this.isTagSelected(tag.id)) {
      this.selectedTags.splice(this.selectedTags.indexOf({id: tag.id, name: tag.name}, 0), 1);
    } else if (this.selectedTags.length < 3) {
      this.selectedTags.push({
        id: tag.id,
        name: tag.name
      });
    }
  }

  rowColors(question) {
    if (question.status === 'ACCEPTED') {
      return 'rgb(196, 241, 197)';
    } else if (question.status === 'REJECTED') {
      return 'rgb(255, 218, 234)';
    }
  }
}
