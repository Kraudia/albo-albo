import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../models/question';

@Component({
  selector: 'app-medium-question',
  templateUrl: './medium-question.component.html',
  styleUrls: ['./medium-question.component.scss']
})
export class MediumQuestionComponent implements OnInit {
  @Input('question') question: Question;

  constructor() { }

  ngOnInit() {
  }

}
