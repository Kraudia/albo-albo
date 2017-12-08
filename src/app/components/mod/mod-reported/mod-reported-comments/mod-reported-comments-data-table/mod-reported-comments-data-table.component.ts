import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { ReportedComment } from '../../../../../models/reportedComment';
import { ModService } from '../../../../../services/mod.service';

@Component({
  selector: 'app-mod-reported-comments-data-table',
  templateUrl: './mod-reported-comments-data-table.component.html',
  styleUrls: ['./mod-reported-comments-data-table.component.scss']
})
export class ModReportedCommentsDataTableComponent implements OnInit, OnDestroy {
  public reports: ReportedComment[] = [];
  public reportCount = 0;
  public isLoading = false;
  private subscription: Subscription;
  private reportResource: DataTableResource<ReportedComment>;
  @ViewChild(DataTable) reportTable: DataTable;

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
    this.slimLoadingBarService.start();
    this.modService.deleteReportedComment(report.id).subscribe(res => {
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

  deleteComment(report: ReportedComment) {
    this.slimLoadingBarService.start();
    this.modService.deleteComment(report.question.id, report.comment.id).subscribe(res => {
        this.reports.splice(this.reports.indexOf(report), 1);
        this.reportResource = new DataTableResource(this.reports);
        this.reportResource.count().then(count => this.reportCount = count);
        this.slimLoadingBarService.complete();
        this.deleteReport(report);
      },
      error => {
        this.toastrService.error(error);
        this.slimLoadingBarService.complete();
      });
  }

  saveValue(report: ReportedComment, value) {
    this.slimLoadingBarService.start();
    this.modService.editReportedComment(report.question.id, report.comment.id, value).subscribe(res => {
        this.slimLoadingBarService.complete();
        for (let i = 0; i < this.reportTable.items.length; i++) {
          if (this.reportTable.items[i].question.id === report.question.id && this.reportTable.items[i].comment.id === report.comment.id) {
            this.reportTable.items[i].comment.value = value;
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
