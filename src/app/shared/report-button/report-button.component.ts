import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-report-button',
  templateUrl: './report-button.component.html',
  styleUrls: ['./report-button.component.scss']
})
export class ReportButtonComponent implements OnInit {
  @Input('question') question: number;
  @Output('onReported') onReported = new EventEmitter<number>();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
