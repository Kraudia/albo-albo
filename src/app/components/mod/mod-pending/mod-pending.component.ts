import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/tag';
import { Title } from '@angular/platform-browser';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-mod',
  templateUrl: 'mod-pending.component.html',
  styleUrls: ['mod-pending.component.scss']
})
export class ModPendingComponent implements OnInit {
  public order = 'created_date DESC';
  public status = 'ACCEPTED';
  public adult = null;
  public limit = 20;
  public tags: Tag[];
  public tag: number;

  constructor(
    private questionService: QuestionService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.getTags();
  }

  setTitle() {
    const title = `Panel moderatora - Albo Albo`;
    this.titleService.setTitle(title);
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

  changeLimit(event) {
    this.limit = event.target.value;
  }

  sortByAdultRated(adult: string) {
    this.adult = adult;
  }

  sortBy(sort: string) {
    if (this.order === sort) {
      if (sort === 'comment_count DESC') {
        this.order = 'comment_count ASC';
      } else if (sort === 'answer_count DESC') {
        this.order = 'answer_count ASC';
      } else if (sort === 'vote_count DESC') {
        this.order = 'vote_count ASC';
      } else {
        this.order = 'created_date ASC';
      }
    } else {
      this.order = sort;
    }
  }
}
