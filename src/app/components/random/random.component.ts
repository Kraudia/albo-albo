import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  public question = 2;
  public btnFirst = 'btn-random-first';
  public btnSecond = 'btn-random-second';

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }

}
