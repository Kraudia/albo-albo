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
  @Input('btnFirst') btnFirst = 'btn-default-first';
  @Input('btnSecond') btnSecond = 'btn-default-second';
  public question: Question;
  private voteSum;

  public progressBarFirst = 0;
  public progressBarSecond = 0;

  constructor(
    private questionService: QuestionService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getOneQuestion();
    this.voteSum = true;
  }

  answer(id: number) {
    if (! this.question.myAnswer) {
      this.question.myAnswer = id;
      if (id === 1) {
        this.question.firstCount += 1;
      } else {
        this.question.secondCount += 1;
      }
      this.loadProgress();
    }
  }

  loadProgress() {
    this.progressBarFirst = this.question.firstCount / (this.question.firstCount + this.question.secondCount) * 100;
    this.progressBarSecond = this.question.secondCount / (this.question.firstCount + this.question.secondCount) * 100;
  }

  getOneQuestion() {
    if (this.idQuestion) {
      this.questionService.getOneQuestion(this.idQuestion)
        .subscribe(
          question => {
            this.question = question;

            if (this.question.myAnswer) {
              this.loadProgress();
            }
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
