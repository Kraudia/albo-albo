import { Component, OnDestroy, Input } from '@angular/core';
import { Comment } from '../../../models/comment';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnDestroy {
  @Input('idQuestion') idQuestion: number;
  @Input('comment') comment: Comment;
  private subscription = new Subscription();
  private voteSum = true;

  constructor(
    public authService: AuthService,
    private commentService: CommentService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  vote(value: number) {
    this.comment.myRank = value;
    if (value === -1) {
      this.comment.minusCount += 1;
    } else {
      this.comment.plusCount += 1;
    }

    const subscription = this.commentService.voteComment(this.idQuestion, this.comment.id, value).subscribe(
      res => {
        this.comment.myRank = value;
      }
    );
    this.subscription.add(subscription);
  }

  getVoteSum() {
    return this.voteSum;
  }

  toggleVoteSum() {
    this.voteSum = !this.voteSum;
    return this.voteSum;
  }
}
