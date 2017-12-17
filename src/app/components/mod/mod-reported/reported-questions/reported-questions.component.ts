import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { ReportedQuestion } from '../../../../models/reportedQuestion';
import { ModService } from '../../../../services/mod.service';

@Component({
  selector: 'app-reported-questions',
  templateUrl: 'reported-questions.component.html',
  styleUrls: ['reported-questions.component.scss']
})
export class ReportedQuestionsComponent implements OnInit, OnDestroy {
  public reports: ReportedQuestion[] = [];
  public reportCount = 0;
  public isLoading = false;
  private subscription: Subscription;
  private reportResource: DataTableResource<ReportedQuestion>;

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

  constructor(
    private modService: ModService,
    private slimLoadingBarService: SlimLoadingBarService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getQuestions() {
    this.isLoading = true;
    const subscription = this.modService.getReportedQuestions()
      .subscribe(
        response => {
          this.reports = response;
          this.reportResource = new DataTableResource(this.reports);
          this.reportResource.count().then(count => this.reportCount = count);
          this.isLoading = false;
        },
        error => {
          this.toastrService.error(error);
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  deleteReport(report: ReportedQuestion) {
    report.isDeletingReport = true;
    this.slimLoadingBarService.start();
    this.modService.deleteReportedQuestion(report.id).subscribe(res => {
        report.isDeletedReport = true;
        report.isDeletingReport = false;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        report.isDeletingReport = false;
        this.slimLoadingBarService.complete();
      });
  }

  deleteQuestion(report: ReportedQuestion) {
    report.isDeletingQuestion = true;
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, 'REJECTED', null, null).subscribe(res => {
        report.question.status = 'REJECTED';
        report.isDeletedReport = true;
        report.isDeletingQuestion = false;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        report.isDeletingQuestion = false;
        this.slimLoadingBarService.complete();
      });
  }

  saveValue(report: ReportedQuestion, value) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, value, null, null, null, null, null).subscribe(
      res => {
        report.question.value = value;
        report.isEdited = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveFirstAnswer(report: ReportedQuestion, firstAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, firstAnswer, null, null, null, null).subscribe(
      res => {
        report.question.firstAnswer = firstAnswer;
        report.isEdited = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveSecondAnswer(report: ReportedQuestion, secondAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, secondAnswer, null, null, null).subscribe(
      res => {
        report.question.secondAnswer = secondAnswer;
        report.isEdited = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveStatus(report: ReportedQuestion, status) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, status, null, null).subscribe(
      res => {
        report.question.status = status;
        report.isEdited = true;
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
        report.question.adultRated = adultRated;
        report.isEdited = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveShortLink(report: ReportedQuestion, shortLink) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, null, null, shortLink).subscribe(
      res => {
        report.question.shortLink = shortLink;
        report.isEdited = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  handleError(value) {
    this.toastrService.error('Długość powinna wynosić od 2 do 150 znaków.');
  }

  reloadItems(params) {
    if (this.reportResource) {
      this.reportResource.query(params).then(reports => this.reports = reports);
    }
  }

  rowColors(report) {
    if (report.isDeletedReport) {
      return 'rgb(196, 241, 197)';
    } else if (report.isDeletedQuestion) {
      return 'rgb(255, 218, 234)';
    } else if (report.isEdited) {
      return 'rgb(202, 244, 249)'
    }
  }
}
