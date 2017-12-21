import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource, DataTableTranslations } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { ReportedComment } from '../../../../models/reportedComment';
import { ModService } from '../../../../services/mod.service';

@Component({
  selector: 'app-mod-reported-comments-data-table',
  templateUrl: 'reported-comments.component.html',
  styleUrls: ['reported-comments.component.scss']
})
export class ReportedCommentsComponent implements OnInit, OnDestroy {
  public reports: ReportedComment[] = [];
  public reportCount = 0;
  public isLoading = false;
  private subscription: Subscription;
  private reportResource: DataTableResource<ReportedComment>;

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
    const subscription = this.modService.getReportedComments()
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

  deleteReport(report: ReportedComment) {
    report.isDeletingReport = true;
    this.slimLoadingBarService.start();
    this.modService.deleteReportedComment(report.id).subscribe(res => {
        report.isDeletingReport = false;
        report.isDeletedReport = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        report.isDeletingReport = false;
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  deleteComment(report: ReportedComment) {
    this.slimLoadingBarService.start();
    report.isDeletingComment = true;
    this.modService.editReportedComment(report.comment.id, null, false).subscribe(res => {
        report.isDeletingComment = false;
        report.isDeletedComment = true;
        this.slimLoadingBarService.complete();
      },
      error => {
        report.isDeletingComment = false;
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveValue(report: ReportedComment, value) {
    this.slimLoadingBarService.start();
    this.modService.editReportedComment(report.comment.id, value, null).subscribe(res => {
        report.comment.value = value;
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
    } else if (report.isDeletedComment) {
      return 'rgb(255, 218, 234)';
    } else if (report.isEdited) {
      return 'rgb(202, 244, 249)'
    }
  }

  translations = <DataTableTranslations>{
    expandColumn: 'Rozwiń wiersz'
  }
}
