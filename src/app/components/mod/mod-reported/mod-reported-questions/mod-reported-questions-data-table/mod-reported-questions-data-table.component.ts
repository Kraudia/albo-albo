import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
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
  private subscription: Subscription;
  private questionResource: DataTableResource<ReportedQuestion>;

  constructor(
    private modService: ModService,
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

  reloadItems(params) {
    if (this.questionResource) {
      this.questionResource.query(params).then(questions => this.questions = questions);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
