import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-4-data-table-bootstrap-4';
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
  public reports: ReportedQuestion[] = [];
  public reportCount = 0;
  public isLoading = false;
  private subscription: Subscription;
  private reportResource: DataTableResource<ReportedQuestion>;
  @ViewChild(DataTable) reportTable: DataTable;

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
    this.slimLoadingBarService.start();
    this.modService.deleteReportedQuestion(report.id).subscribe(res => {
        this.reports.splice(this.reports.indexOf(report), 1);
        this.reportResource = new DataTableResource(this.reports);
        this.reportResource.count().then(count => this.reportCount = count);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  deleteQuestion(report: ReportedQuestion) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, 'REJECTED', null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.status = 'REJECTED';
          }
        }
        this.deleteReport(report);
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveValue(report: ReportedQuestion, value) {
    this.slimLoadingBarService.start();
    for (let i = 0; i < this.reportTable.items.length; i++) {
      if (this.reportTable.items[i].question.id === report.question.id) {
        this.reportTable.items[i].question.value = value;
      }
    }
    this.modService.editReportedQuestion(report.question.id, value, null, null, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveFirstAnswer(report: ReportedQuestion, firstAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, firstAnswer, null, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.firstAnswer = firstAnswer;
          }
        }
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveSecondAnswer(report: ReportedQuestion, secondAnswer) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, secondAnswer, null, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.secondAnswer = secondAnswer;
          }
        }
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveStatus(report: ReportedQuestion, status) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, status, null, null).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.status = status;
          }
        }
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveAdultRated(report: ReportedQuestion, adultRated) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, null, adultRated, null).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.adultRated = adultRated;
          }
        }
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
      });
  }

  saveShortLink(report: ReportedQuestion, shortLink) {
    this.slimLoadingBarService.start();
    this.modService.editReportedQuestion(report.question.id, null, null, null, null, null, shortLink).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id) {
            this.reportTable.items[i].question.shortLink = shortLink;
          }
        }
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
        this.subscription.unsubscribe();
        this.getQuestions();
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
