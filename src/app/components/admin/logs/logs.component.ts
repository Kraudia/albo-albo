import { Component, OnInit } from '@angular/core';
import { nameOptions } from './nameOptions';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  public limit = 50;
  public userId = '';
  public info = '';
  public status = '';
  public name = '';

  public nameOptions;

  constructor() { }

  ngOnInit() {
    this.nameOptions = nameOptions;
  }

  changeLimit(event) {
    this.limit = event.target.value;
  }

  changeUserId(event) {
    this.userId = event.target.value;
  }

  changeInfo(event) {
    this.info = event.target.value;
  }

  clearStatus() {
    this.status = '';
  }

  clearName() {
    this.name = '';
  }
}
