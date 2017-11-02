import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import * as moment from 'moment';
declare const $: any;

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Comment } from '../../models/comment';
import { animateNumber } from './animateNumber';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('pulse', [
      transition('unanswered => answered', animate('200ms ease-in', keyframes([
        style({transform: 'scale3d(1, 1, 1)'}),
        style({transform: 'scale3d(1.05, 1.05, 1.05)'}),
        style({transform: 'scale3d(1, 1, 1)'})
      ])))
    ]),
    trigger('fadeInOut', [
      transition(':enter', [  // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [  // :leave is alias to '* => void'
        animate(500, style({ opacity: 0}))
      ])
    ]),
    trigger('easeLeft', [
      transition('0 => 1', animate('400ms ease', keyframes([
        style({width: '100%'}),
        style({width: '*'})
      ])))
    ]),
    trigger('easeRight', [
      transition('true => false', animate('400ms ease', keyframes([
        style({width: 0}),
        style({width: '*'})
      ])))
    ])
  ]
})
export class QuestionComponent implements OnInit {
  @Input('btnFirst') btnFirst = 'btn-default-first';
  @Input('btnSecond') btnSecond = 'btn-default-second';
  @Input('idQuestion') idQuestion: string;

  public comments: Comment[];
  public firstCountPercentage = 0;
  public secondCountPercentage = 0;
  public question: Question;
  public state = false;
  public stateFirst = 'unanswered';
  public stateSecond = 'unanswered';

  private voteSum;

  constructor(
    private questionService: QuestionService,
    private elementRef: ElementRef,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getOneQuestion();
    this.voteSum = true;
  }

  answer(id: number) {
    if (!this.question.myAnswer) {
      this.state = true;
      this.question.myAnswer = id;
      if (id === 1) {
        this.stateFirst = 'answered';
        this.question.firstCount += 1;
      } else {
        this.stateSecond = 'answered';
        this.question.secondCount += 1;
      }
      this.loadProgress();
      this.animateVoteNumber();
    }
  }

  loadProgress() {
    this.firstCountPercentage = Math.round(this.question.firstCount / (this.question.firstCount + this.question.secondCount) * 100);
    this.secondCountPercentage = Math.round(this.question.secondCount / (this.question.firstCount + this.question.secondCount) * 100);
  }

  animateVoteNumber() {
    animateNumber();
    const percent_number_step = $.animateNumber.numberStepFactories.append(' %');
    $(this.elementRef.nativeElement).find('.firstVoteNumber').animateNumber(
      {
        number: this.firstCountPercentage,
        easing: 'easeInQuad',
        numberStep: percent_number_step
      }, 2000
    );

    $(this.elementRef.nativeElement).find('.secondVoteNumber').animateNumber(
      {
        number: this.secondCountPercentage,
        easing: 'easeInQuad',
        numberStep: percent_number_step
      }, 2000
    );
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
    if (this.comments) {
      this.comments = null;
    } else {
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
