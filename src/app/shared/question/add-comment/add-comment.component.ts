import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input('idQuestion') idQuestion: number;
  @Output() refresh = new EventEmitter();

  public commentValue = '';
  public isInvalid = false;
  public isValid = false;
  public isSubmitting: boolean;

  constructor(
    public authService: AuthService,
    private commentService: CommentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  comment(value: string) {
    this.isSubmitting = true;
    const reg = new RegExp('^\\s+$');
    this.isInvalid = false;
    this.isValid = false;

    if (!reg.test(value) && value !== '') {
      this.commentService.postComment(this.idQuestion, value)
        .subscribe(
          res => {
            this.isValid = true;
            this.commentValue = '';
            this.refresh.emit();
            this.toastrService.success('Twój komentarz został opublikowany.', 'Sukces');
            this.isSubmitting = false;
          },
        error => {
          this.toastrService.error(error);
          this.isSubmitting = false;
        });
    } else {
      this.isInvalid = true;
      this.isSubmitting = false;
    }
  }
}
