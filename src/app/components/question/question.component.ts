import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public question: Question;

  constructor(
    private questionService: QuestionService
  ) {
    this.getOneQuestion();
  }

  ngOnInit() {
  }

  getOneQuestion() {
    this.questionService.getOneQuestion(62)
      .subscribe(
        question => {
          this.question = question;
        },
        error => console.error(error));
  }
}
