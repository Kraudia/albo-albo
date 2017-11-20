import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private type = 'vote';

  public btnFirst = 'btn-top-first';
  public btnSecond = 'btn-top-second';
  public isLoading = false;
  public questions: Question[] = [];

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['type']) {
          const type = params['type'];
          if (type === 'oceniane') {
            this.type = 'vote';
          } else if (type === 'lubiane') {
            this.type = 'favourite';
          }else if (type === 'odpowiadane') {
            this.type = 'answer';
          } else if (type === 'komentowane') {
            this.type = 'comments';
          } else {
            this.type = 'vote';
            this.router.navigate(['top'], {replaceUrl: true});
          }
          this.subscription = new Subscription();
          this.getTopQuestions();
        }
      });
    const title = `Top pytań - Albo Albo`;
    this.titleService.setTitle(title);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTopQuestions() {
  this.questions = [];
    this.isLoading = true;
    const subscription = this.questionService.getTopQuestions(this.type)
      .subscribe(
        response => {
          this.questions = response;
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }
}
