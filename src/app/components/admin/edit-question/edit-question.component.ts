import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question';
import { Tag } from '../../../models/tag';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit, OnDestroy {
  public isEditing: boolean;
  public isLoading: boolean;

  public question: Question;
  public value: string;
  public firstAnswer: string;
  public secondAnswer: string;
  public status: string;
  public checked: boolean;
  public tags: {
    id: number,
    name: string
  }[];
  public userTags: number[] = [];

  private subscription = new Subscription();

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private titleService: Title,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.getOneQuestion(params['id']);
        } else {
          this.toastrService.error('Brakuje parametru pytania.');
        }
      });
    this.setTitle();
    this.getTags();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTitle() {
    const title = `Edytuj pytanie - Panel administratora - Albo Albo`;
    this.titleService.setTitle(title);
  }

  getOneQuestion(id: string) {
    this.isLoading = true;
    const subscription = this.questionService.getOneQuestion(id)
      .subscribe(
        response => {
          this.question = response;
          this.value = this.question.value;
          this.firstAnswer = this.question.firstAnswer;
          this.secondAnswer = this.question.secondAnswer;
          this.status = this.question.status;
          if (this.question.tags){
            for (const tag of this.question.tags) {
              this.userTags.push(tag.id);
            }
          }
          this.checked = this.question.adultRated;
          this.isLoading = false;
        },
        error => {
          this.toastrService.error(error);
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  getTags() {
    this.questionService.getTags()
      .subscribe(
        res => {
          this.tags = res;
        },
        error => {
          this.toastrService.error(error);
        });
  }

  isInUserTags(tag: Tag) {
    for (const id of this.userTags) {
      if (id === tag.id) {
        return true;
      }
    }
    return false;
  }

  selectTag(tag: Tag) {
    if (this.isInUserTags(tag)) {
      this.userTags.splice(this.userTags.indexOf(tag.id, 0), 1);
    } else if (this.userTags.length < 3) {
      this.userTags.push(tag.id);
    }
  }

  clickCheckbox() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }
}
