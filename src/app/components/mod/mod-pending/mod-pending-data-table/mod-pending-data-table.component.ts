import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { Question } from '../../../../models/question';
import { QuestionService } from '../../../../services/question.service';
import { ModService } from '../../../../services/mod.service';
import { Tag } from '../../../../models/tag';

@Component({
  selector: 'app-mod-pending-data-table',
  templateUrl: 'mod-pending-data-table.component.html',
  styleUrls: ['mod-pending-data-table.component.scss']
})
export class ModPendingDataTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input('adult') adult: string;
  @Input('limit') limit: 10;
  @Input('order') order: string;
  @Input('tag') tag: number;
  @ViewChild(DataTable) questionsTable: DataTable;

  public selectedQuestion: Question;
  private selectedTags: {
    id: number;
    name: string;
  }[] = [];
  private index: string;

  public tags: Tag[] = [];
  public questions: Question[] = [];
  public questionCount = 0;
  public throttle = 300;
  public scrollDistance = 0;
  public disableScroll;
  public isLoading = false;

  private subscription = new Subscription();
  private questionResource = new DataTableResource([]);
  private status = 'PENDING';

  constructor(
    private modService: ModService,
    private questionService: QuestionService,
    private slimLoadingBarService: SlimLoadingBarService,
    private toastrService: ToastrService
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
    this.index = null;
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reload(params) {
    this.slimLoadingBarService.start();
    this.questionResource.query(params).then(questions => this.questions = questions);
    this.slimLoadingBarService.complete();
  }

  getQuestions() {
    this.isLoading = true;
    const subscription = this.questionService.getQuestions(this.adult, null, null, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          this.questions = response;
          this.questionResource = new DataTableResource(this.questions);
          this.questionResource.count().then(count => this.questionCount = count);
          if (this.questions.length > 0) {
            this.index = this.questions[this.questions.length - 1].createdDate;
          }
          this.isLoading = false;
          this.disableScroll = false;
        });
    this.subscription.add(subscription);
  }

  getMoreQuestions() {
    this.slimLoadingBarService.start();
    this.isLoading = true;
    this.disableScroll = true;
    const subscription = this.questionService.getQuestions(this.adult, null, this.index, this.limit, this.order, this.status, this.tag)
      .subscribe(
        response => {
          response.shift();
          this.questions = [ ...this.questions, ...response];
          this.index = this.questions[this.questions.length - 1].createdDate;
          this.disableScroll = false;
          this.questionResource = new DataTableResource(this.questions);
          this.questionResource.count().then(count => this.questionCount = count);
          this.isLoading = false;
          this.slimLoadingBarService.complete();
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
          this.toastrService.error(error);
      });
  }

  reject(question: Question) {
    this.modService.reject(question)
      .subscribe(
        res => {
          question.status = 'REJECTED';
        },
        error => {
          this.toastrService.error(error);
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
  onScrollDown() {
    this.getMoreQuestions();
  }

  rowColors(question) {
    if (question.status === 'ACCEPTED') {
      return 'rgb(196, 241, 197)';
    } else if (question.status === 'REJECTED') {
      return 'rgb(255, 218, 234)';
    }
  }
}
