import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  question = '2';
  btnFirst = 'btn-pendingFirst';
  btnSecond = 'btn-pendingSecond';

  constructor() { }

  ngOnInit() {
  }

}
