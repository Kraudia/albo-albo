import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { AuthService } from '../../services/auth.service';
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
  private voteSum;

  constructor(
    private questionService: QuestionService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getOneQuestion();
    this.voteSum = true;
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

  getVoteSum() {
    return this.voteSum;
  }

  toggleVoteSum() {
    this.voteSum = !this.voteSum;
    return this.voteSum;
  }

  comment() {
    // TODO: comment
  }

  goToQuestionPage() {
    // TODO: go to question page
  }

  goToUserPage() {
    // TODO: go to user page
  }

  addToFavorites() {
    // TODO: add to favorites
  }

  removeFromFavorites() {
    // TODO: remove from favorites
  }

  vote() {
    // TODO: vote
  }
}
moment.locale('pl');
