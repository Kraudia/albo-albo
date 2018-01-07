import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { QuestionService } from '../../services/question.service';
import { Tag } from '../../models/tag';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {
  public btnFirst = 'btn-accepted-first';
  public btnSecond = 'btn-accepted-second';

  public sort = 'accepted_date DESC';
  public tag: number;

  public status = 'ACCEPTED';
  public tags: Tag[];
  public adult = '';
  public isAdult = 'false';
  public answered = '';

  constructor(
    public authService: AuthService,
    private questionService: QuestionService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.getTags();
  }

  setTitle() {
    const title = `Najnowsze pytania - Albo Albo`;
    this.titleService.setTitle(title);
    this.isAdult = localStorage.getItem('isAdult');
    if (this.isAdult !== 'true') {
      this.adult = 'false';
    }
  }

  getTags() {
    this.questionService.getTags()
      .subscribe(
        response => {
          this.tags = response;
        },
        error => console.error(error));
  }

  selectTag(tag: number) {
    this.tag = tag;
  }

  sortBy(sort: string) {
    if (this.sort === sort) {
      if (sort === 'comment_count DESC') {
        this.sort = 'comment_count ASC';
      } else if (sort === 'answer_count DESC') {
        this.sort = 'answer_count ASC';
      } else if (sort === 'vote_count DESC') {
        this.sort = 'vote_count ASC';
      } else {
        this.sort = 'accepted_date ASC';
      }
    } else {
      this.sort = sort;
    }
  }
}

