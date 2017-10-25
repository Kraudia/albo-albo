import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('idQuestion') idQuestion: string;
  @Input('btnFirst') btnFirst = 'btn-success';
  @Input('btnSecond') btnSecond = 'btn-info';
  public question: Question;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getOneQuestion();
  }

  getOneQuestion() {
    if (this.idQuestion) {
      this.questionService.getOneQuestion(this.idQuestion)
        .subscribe(
          question => {
            this.question = question;
          },
          error => console.error(error));
    }
  }
}
