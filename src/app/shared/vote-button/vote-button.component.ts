import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit, OnChanges {
  @Input('myVote') myVote: number;
  @Input('plusCount') plusCount: number;
  @Input('minusCount') minusCount: number;
  @Input('isVoting') isVoting: boolean;
  @Output('onVoted') onVoted = new EventEmitter<number>();

  public count: number;
  public sum: number;
  public sumShow: boolean;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.sumShow = false;
    this.count = this.plusCount + this.minusCount;
    this.sum = this.plusCount - this.minusCount;
  }

  ngOnChanges() {
    this.count = this.plusCount + this.minusCount;
    this.sum = this.plusCount - this.minusCount;
  }

  toggle() {
    this.sumShow = !this.sumShow;
  }

  vote(value: number) {
    this.onVoted .emit(value);
  }
}
