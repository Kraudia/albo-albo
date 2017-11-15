import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
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
export class TopComponent implements OnInit, OnChanges, OnDestroy {
  private subscription = new Subscription();
  private type = 'vote';

  public btnFirst = 'btn-top-first';
  public btnSecond = 'btn-top-second';
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
    const title = `Top - Albo Albo`;
    this.titleService.setTitle(title);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log('cos sie zmienilo');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTopQuestions() {
    const subscription = this.questionService.getTopQuestions(this.type)
      .subscribe(
        response => {
          this.questions = response;
        });
    this.subscription.add(subscription);
  }
}
