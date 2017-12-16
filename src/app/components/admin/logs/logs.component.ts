import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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

  changeStatus(event) {
    this.status = event.target.value;
  }

  changeName(event) {
    this.name = event.target.value;
  }
}
