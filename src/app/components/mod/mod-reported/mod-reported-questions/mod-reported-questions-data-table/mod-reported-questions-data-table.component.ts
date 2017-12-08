import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { ReportedQuestion } from '../../../../../models/reportedQuestion';
import { ModService } from '../../../../../services/mod.service';

@Component({
  selector: 'app-mod-reported-questions-data-table',
  templateUrl: './mod-reported-questions-data-table.component.html',
  styleUrls: ['./mod-reported-questions-data-table.component.scss']
})
export class ModReportedQuestionsDataTableComponent implements OnInit, OnDestroy {
  public questions: ReportedQuestion[] = [];
  public questionCount = 0;
  public isLoading = false;
  public isDeleting = false;
  public isEditing = false;
  private subscription: Subscription;
  private questionResource: DataTableResource<ReportedQuestion>;

  public adultRatedOptions = {
    data: [
      { id: true, field: 'tak' },
      { id: false, field: 'nie' }
    ],
    value: 'id',
    text: 'field'
  };

  public statusOptions = {
    data: [
      { id: 'ACCEPTED', field: 'Zatwierdzone' },
      { id: 'PENDING', field: 'Oczekujące' },
      { id: 'REJECTED', field: 'Odrzucone' }
    ],
    value: 'id',
    text: 'field'
  };

  public selectedQuestion: ReportedQuestion;
  id: number;
  value: string;
  firstAnswer: string;
  secondAnswer: string;
  status: string;
  adultRated: boolean;
  shortLink: string;


  constructor(
    private modService: ModService,
    private slimLoadingBarService: SlimLoadingBarService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getQuestions();
  }

  getQuestions() {
    this.isLoading = true;
    const subscription = this.modService.getReportedQuestions()
      .subscribe(
        response => {
          this.questions = response;
          this.questionResource = new DataTableResource(this.questions);
          this.questionResource.count().then(count => this.questionCount = count);
          this.isLoading = false;
        },
      error => {
          this.toastrService.error(error);
        this.isLoading = false;
      });
    this.subscription.add(subscription);
  }

  deleteReport(report: ReportedQuestion) {
    this.isDeleting = true;
    this.slimLoadingBarService.start();
    this.modService.deleteReportedQuestion(report.id).subscribe(res => {
        this.questions.splice(this.questions.indexOf(report), 1);
        this.questionResource = new DataTableResource(this.questions);
        this.questionResource.count().then(count => this.questionCount = count);
        this.isDeleting = false;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.isDeleting = false;
        this.slimLoadingBarService.complete();
      });
  }

  saveValue(report: ReportedQuestion, value) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, value, null, null, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveFirstAnswer(report: ReportedQuestion, firstAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, firstAnswer, null, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveSecondAnswer(report: ReportedQuestion, secondAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, secondAnswer, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveStatus(report: ReportedQuestion, status) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, status, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveAdultRated(report: ReportedQuestion, adultRated) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, null, adultRated, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveShortLink(report: ReportedQuestion, shortLink) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, null, null, shortLink).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  reloadItems(params) {
    if (this.questionResource) {
      this.questionResource.query(params).then(questions => this.questions = questions);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
