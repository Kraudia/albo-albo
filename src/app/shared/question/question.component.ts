import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('btnFirst') btnFirst = 'btn-default-first';
  @Input('btnSecond') btnSecond = 'btn-default-second';
  @Input('idQuestion') idQuestion: string;

  public comments: Comment[];
  public commentsShow;
  public progressBarFirst = 0;
  public progressBarSecond = 0;
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
          response => {
            this.question = response;

            if (this.question.myAnswer) {
              this.loadProgress();
            }
          },
          error => console.error(error));
    }
  }

  getComments() {
    this.questionService.getComments(this.idQuestion)
      .subscribe(
        response => {
          this.comments = response;
        },
        error => {
          console.error(error);
        },
        () => {
          this.commentsShow = true;
        });
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
    this.getComments();
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
