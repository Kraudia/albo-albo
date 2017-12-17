import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent {
  @Input('myVote') myVote: number;
  @Input('plusCount') plusCount: number;
  @Input('minusCount') minusCount: number;
  @Input('isVoting') isVoting: boolean;
  @Output('onVoted') onVoted = new EventEmitter<number>();

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) { }

  vote(value: number) {
    if (this.authService.isLoggedIn()) {
      if (this.myVote) {
        this.toastrService.error('Niestety można zagłosować tylko raz.', 'Głos już został udzielony')
      } else {
        this.onVoted .emit(value);
      }
    } else {
      this.toastrService.error('Musisz być zalogowany, aby móc zagłosować.', 'Zaloguj się')
    }
  }
}
