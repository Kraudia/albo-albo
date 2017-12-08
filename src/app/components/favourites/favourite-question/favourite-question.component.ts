import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-favourite-question',
  templateUrl: 'favourite-question.component.html',
  styleUrls: ['favourite-question.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':leave', [
        animate(1000, style({ opacity: 0}))
      ])
    ])
  ]
})
export class FavouriteQuestionComponent implements OnInit, OnDestroy  {
  @Input('question') question: Question;
  private subscription = new Subscription();
  public isFavouriteLoading = false;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeFromFavorites() {
    this.isFavouriteLoading = true;
    const subscription = this.questionService.removeFavouriteQuestion(this.question.id).subscribe(
      () => {
        this.question = null;
        this.isFavouriteLoading = false;
      }
    );
    this.subscription.add(subscription);
  }
}
moment.locale('pl');
