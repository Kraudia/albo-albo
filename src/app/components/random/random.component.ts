import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
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
  public isLoading = false;

  private subscription = new Subscription();

  constructor(
    private location: Location,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
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
  this.isLoading = true;
      const subscription = this.questionService.getOneQuestion(id)
        .subscribe(
          response => {
            this.question = response;
            this.setTitle();
            this.isLoading = false;
          });
      this.subscription.add(subscription);
  }

  getRandomQuestion() {
    this.isLoading = true;
    const subscription = this.questionService.getQuestions(null, 'false', null, 1, 'random', null, null)
      .subscribe(
        response => {
          this.question = response.shift();
          this.setTitle();
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  setTitle() {
    if (this.question) {
      if (this.router.url === '/pytanie') {
        this.router.navigate(['pytanie', this.question.id, this.question.shortLink], {replaceUrl: true});
      } else {
        this.router.navigate(['pytanie', this.question.id, this.question.shortLink], {replaceUrl: false});
      }

      const title = `#${this.question.id} - ${this.question.value} - Albo Albo`;
      this.titleService.setTitle(title);
    }
  }

  goBack() {
    this.location.back();
  }

  goForward() {
      this.getRandomQuestion();
  }
}
