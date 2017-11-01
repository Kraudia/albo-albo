import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import * as moment from 'moment';

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('answerAnimation', [
      transition('unanswered => answered', animate('200ms ease-in', keyframes([
        style({transform: 'scale3d(1, 1, 1)'}),
        style({transform: 'scale3d(1.05, 1.05, 1.05)'}),
        style({transform: 'scale3d(1, 1, 1)'})
      ]))),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [  // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [  // :leave is alias to '* => void'
        animate(500, style({ opacity: 0}))
      ])
    ])
  ]
})
export class QuestionComponent implements OnInit {
  @Input('btnFirst') btnFirst = 'btn-default-first';
  @Input('btnSecond') btnSecond = 'btn-default-second';
  @Input('idQuestion') idQuestion: string;

  public comments: Comment[];
  public commentsShow = false;
  public progressBarFirst = 0;
  public progressBarSecond = 0;
  public question: Question;
  public stateFirst = 'unanswered';
  public stateSecond = 'unanswered';

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
        this.stateFirst = 'answered';
        this.question.firstCount += 1;
      } else {
        this.stateSecond = 'answered';
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
    this.commentsShow = (this.commentsShow === false);

    if (this.commentsShow) {
      this.questionService.getComments(this.idQuestion)
        .subscribe(
          response => {
            this.comments = response;
          },
          error => {
            console.error(error);
          });
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
