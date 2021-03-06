import { Component, OnDestroy, Input } from '@angular/core';
import { Comment } from '../../../models/comment';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnDestroy {
  @Input('idQuestion') idQuestion: number;
  @Input('comment') comment: Comment;
  private subscription = new Subscription();
  private isVoting: boolean;

  constructor(
    public authService: AuthService,
    private commentService: CommentService,
    private toastrService: ToastrService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  vote(value: number) {
    this.isVoting = true;
    this.comment.myRank = value;
    if (value === -1) {
      this.comment.minusCount += 1;
    } else {
      this.comment.plusCount += 1;
    }
    const subscription = this.commentService.voteComment(this.comment.id, value).subscribe(
      res => {
        this.isVoting = false;
      },
      error => {
        this.isVoting = false;
        this.toastrService.error(error);
      }
    );
    this.subscription.add(subscription);
  }
}
