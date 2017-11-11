import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { validationErrors } from './validationErrors';

import { AddQuestionService } from '../../services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  private validated: boolean;
  private checked: boolean;
  public errorMessage: String;
  public addQuestionForm: FormGroup;
  public validationMessages = validationErrors;

  constructor(
    private formBuilder: FormBuilder,
    private addQuestionService: AddQuestionService,
    private router: Router,
    private titleService: Title
  ) {
    this.validated = false;
    this.checked = false;
  }

  ngOnInit() {
    this.setTitle();
    this.buildForm();
  }

  setTitle() {
    const title = `Dodaj pytanie - Albo Albo`;
    this.titleService.setTitle(title);
  }

  buildForm() {
    this.addQuestionForm = this.formBuilder.group({
      inputValue: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150)
      ]
      ],
      inputFirstAnswer: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150)
      ]],
      inputSecondAnswer: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150)
      ]]
    });
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.validated && !this.isFieldValid(field),
      'is-valid': this.validated && this.isFieldValid(field)
    };
  }

  clickCheckbox() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }

  isFieldValid(field: string) {
    return this.addQuestionForm.get(field).valid;
  }

  isFormValid() {
    return this.addQuestionForm.valid;
  }

  getKeysOfObject(object: Object) {
    if (object) {
      return Object.keys(object);
    } else {
      return null;
    }
  }

  validateForm() {
    this.validated = true;
    if (this.addQuestionForm.valid) {
      return true;
    } else {
      this.validateAllFormFields(this.addQuestionForm);
      return false;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  addQuestion(value: string, firstAnswer: string, secondAnswer: string) {
    this.validateForm();

    if (this.validateForm()) {
      this.addQuestionService.postQuestion(value, firstAnswer, secondAnswer, [], this.isChecked())
        .subscribe(
          res => {
            // TODO: success alert
            this.router.navigate(['/poczekalnia']);
          },
          error => {
            // TODO: error alert
              this.errorMessage = 'Twoje pytanie nie zostało dodane.';
          });
    }
  }

  reset() {
    this.addQuestionForm.reset();
    this.validated = false;
    this.checked = false;
  }
}