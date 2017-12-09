import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../../services/question.service';
declare const $: any;

@Component({
  selector: 'app-report-button',
  templateUrl: './report-button.component.html',
  styleUrls: ['./report-button.component.scss']
})
export class ReportButtonComponent implements OnInit {
  @ViewChild('reportModal') reportModal: ElementRef;
  @Input('question') question: number;
  @Input('comment') comment: number;


  public buttonClicked = false;
  public reason: string;
  public isLoading = false;

  constructor(
    public authService: AuthService,
    private questionService: QuestionService,
    private slimLoadingBarService: SlimLoadingBarService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  showReportModal() {
    $(this.reportModal.nativeElement).modal('show');
  }

  report() {
    this.buttonClicked = true;
    this.isLoading = true;

    if (this.reason && this.comment) {
      this.slimLoadingBarService.start();
      this.questionService.reportComment(this.comment, this.reason)
        .subscribe(
        res => {
          this.toastrService.success('Zgłoszenie zostało wysłane.');
          this.isLoading = false;
          this.slimLoadingBarService.complete();
          $(this.reportModal.nativeElement).modal('hide');
        },
        error => {
          this.toastrService.error('Niestety coś poszło nie tak, spróbuj ponownie później.');
          this.isLoading = false;
          this.slimLoadingBarService.complete();
          $(this.reportModal.nativeElement).modal('hide');
        });
    } else {
      this.slimLoadingBarService.start();
      this.questionService.reportQuestion(this.question, this.reason)
        .subscribe(
          res => {
            this.toastrService.success('Zgłoszenie zostało wysłane.');
            this.isLoading = false;
            this.slimLoadingBarService.complete();
            $(this.reportModal.nativeElement).modal('hide');
          },
          error => {
            this.toastrService.error('Niestety coś poszło nie tak, spróbuj ponownie później.');
            this.isLoading = false;
            this.slimLoadingBarService.complete();
            $(this.reportModal.nativeElement).modal('hide');
          });
    }
  }
}
