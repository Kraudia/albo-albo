import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {
  private back: Question[] = [];
  private forward: Question[] = [];
  public question: Question;
  public btnFirst = 'btn-random-first';
  public btnSecond = 'btn-random-second';

  private subscription = new Subscription();

  constructor(
    private location: Location,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getRandomQuestion();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeLocation() {
    this.location.replaceState('/' + this.question.id + '/' + this.question.shortLink);
  }

  getRandomQuestion() {
    const subscription = this.questionService.getQuestions(null, null, null, 1, 'random', null, null)
      .subscribe(
        response => {
            this.question = response.shift();
            if (this.question) {
              this.changeLocation();
            }
        });
    this.subscription.add(subscription);
  }

  goBack() {
    if (this.back.length > 0) {
      this.forward = [this.question, ...this.forward];
      this.question = this.back.pop();
      this.changeLocation();
    }
  }

  goForward() {
    if (this.forward.length > 0) {
      this.back[this.back.length] = this.question;
      this.question = this.forward.shift();
      this.changeLocation();
    } else {
      this.back[this.back.length] = this.question;
      this.subscription.unsubscribe();
      this.subscription = new Subscription();
      this.getRandomQuestion();
    }
  }
}
