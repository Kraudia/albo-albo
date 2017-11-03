import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input('idQuestion') idQuestion;
  @Output() refresh = new EventEmitter();

  public commentValue = '';
  public isInvalid = false;
  public isValid = false;

  constructor(
    private authService: AuthService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  comment(value: string) {
    const reg = new RegExp('^\\s+$');
    this.isInvalid = false;
    this.isValid = false;

    if (!reg.test(value) && value !== '') {
      this.questionService.postComment(value, this.idQuestion)
        .subscribe(
          res => {
            this.isValid = true;
            this.commentValue = '';
            this.refresh.emit();
          });
    } else {
      this.isInvalid = true;
    }
  }

}
