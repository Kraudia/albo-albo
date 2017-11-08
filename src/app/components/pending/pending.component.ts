import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service';
import { Tag } from '../../models/tag';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  public answered = 'true';
  public btnFirst = 'btn-pending-first';
  public btnSecond = 'btn-pending-second';

  public sort = 'created_date DESC';

  public order = 'answered_date DESC';
  public status = 'PENDING';
  public tags: Tag[];

  constructor(
    public authService: AuthService,
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
