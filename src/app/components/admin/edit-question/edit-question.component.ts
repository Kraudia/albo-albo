import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';

import { ModService } from '../../../services/mod.service';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question';
import { Tag } from '../../../models/tag';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit, OnDestroy {
  public isEditing: boolean;
  public isLoading: boolean;

  public question: Question;
  public editedQuestion: Question;
  public tags: {
    id: number,
    name: string
  }[];
  public userTags: number[] = [];

  private subscription = new Subscription();

  constructor(
    private modService: ModService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private titleService: Title,
    private slimLoadingBarService: SlimLoadingBarService,
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
          this.editedQuestion = Object.create(this.question);
          if (this.question.tags){
            for (const tag of this.question.tags) {
              this.userTags.push(tag.id);
            }
          }
          this.isLoading = false;
        },
        error => {
          this.toastrService.error(error);
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  edit() {
    this.isEditing = true;
    this.slimLoadingBarService.start();

    let value, firstAnswer, secondAnswer, status, adultRated,shortLink;
    if (this.question.value !== this.editedQuestion.value) {
      value = this.editedQuestion.value;
    }
    if (this.question.firstAnswer !== this.editedQuestion.firstAnswer) {
      firstAnswer = this.editedQuestion.firstAnswer;
    }
    if (this.question.secondAnswer !== this.editedQuestion.secondAnswer) {
      secondAnswer = this.editedQuestion.secondAnswer;
    }
    if (this.question.status !== this.editedQuestion.status) {
      status = this.editedQuestion.status;
    }
    if (this.question.adultRated !== this.editedQuestion.adultRated) {
      adultRated = this.editedQuestion.adultRated;
    }
    if (this.question.shortLink !== this.editedQuestion.shortLink) {
      shortLink = this.editedQuestion.shortLink;
    }

    this.editTags();
    const subscription = this.modService.editReportedQuestion(this.question.id, value, firstAnswer, secondAnswer, status, adultRated, shortLink)
      .subscribe(
        response => {
          this.question = response;
          this.editedQuestion = Object.create(this.question);
          this.slimLoadingBarService.complete();
          this.isEditing = false;
          this.toastrService.success('Pytanie zostało edytowane!');
        },
        error => {
          this.slimLoadingBarService.complete();
          this.toastrService.error(error);
          this.isEditing = false;
        });
    this.subscription.add(subscription);
  }

  editTags() {
    if (this.question.tags) {
      for (const tag of this.question.tags) {
        const subscription = this.modService.deleteTag(this.question.id, tag.id)
          .subscribe(
            res => {},
            error => {
              this.toastrService.error(error);
            });
        this.subscription.add(subscription);
      }
    }

    if (this.userTags.length) {
      for (const tag of this.userTags) {
        const subscription = this.modService.addTag(this.question.id, tag)
          .subscribe(
            res => {},
            error => {
              this.toastrService.error(error);
            });
        this.subscription.add(subscription);
      }
    }
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
}
