import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  public question = '2';
  public btnFirst = 'btn-pendingFirst';
  public btnSecond = 'btn-pendingSecond';
  public tags: Tag[];

  constructor(
    private questionService: QuestionService
) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.questionService.getTags()
      .subscribe(
        response => {
          this.tags = response;
        },
        error => console.error(error));
  }

}
