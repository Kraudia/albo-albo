import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  public questions: Question[];
  public isLoading = false;

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private questionService: QuestionService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.getUserFavouriteQuestions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTitle() {
    const title = `Ulubione - Albo Albo`;
    this.titleService.setTitle(title);
  }

  getUserFavouriteQuestions() {
    this.isLoading = true;
    const subscription = this.questionService.getUserFavouriteQuestions()
      .subscribe(
        response => {
          this.questions = response;
          this.isLoading = false;
          this.slimLoadingBarService.complete();
        });
    this.subscription.add(subscription);
  }
}
