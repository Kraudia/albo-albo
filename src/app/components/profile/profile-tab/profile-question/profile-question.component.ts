import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../../../models/question';

@Component({
  selector: 'app-profile-question',
  templateUrl: 'profile-question.component.html',
  styleUrls: ['profile-question.component.scss']
})
export class ProfileQuestionComponent implements OnInit {
  @Input('question') question: Question;

  constructor() { }

  ngOnInit() {
  }

}
