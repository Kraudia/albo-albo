import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {
  public question: Question;
  public btnFirst = 'btn-random-first';
  public btnSecond = 'btn-random-second';

  private subscription = new Subscription();

  constructor(
    private location: Location,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.getOneQuestion(params['id']);
        } else {
          this.getRandomQuestion();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getOneQuestion(id: string) {
      const subscription = this.questionService.getOneQuestion(id)
        .subscribe(
          response => {
            this.question = response;
            if (this.question) {
              this.router.navigate(['pytanie', this.question.id, this.question.shortLink], {replaceUrl: true});
            }
          });
      this.subscription.add(subscription);
  }

  getRandomQuestion() {
    const subscription = this.questionService.getQuestions(null, 'false', null, 1, 'random', null, null)
      .subscribe(
        response => {
            this.question = response.shift();
            if (this.question) {
              if (this.router.url === '/pytanie') {
                this.router.navigate(['pytanie', this.question.id, this.question.shortLink], {replaceUrl: true});
              } else {
                this.router.navigate(['pytanie', this.question.id, this.question.shortLink], {replaceUrl: false});
              }
            }
        });
    this.subscription.add(subscription);
  }

  goBack() {
    this.location.back();
  }

  goForward() {
      this.getRandomQuestion();
  }
}
