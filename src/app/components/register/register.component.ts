import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';

import { PasswordValidation } from './PasswordValidation';
import { validationErrors } from './validationMessages';
import { RegisterService } from '../../services/register.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private validated: boolean;
  private checked: boolean;
  public registerForm: FormGroup;
  public validationMessages = validationErrors;
  public isSubmitting = false;

  public isCheckingLogin = false;
  public isCheckingEmail = false;
  public isLoginTaken;
  public isEmailTaken;

  private isLoginChecked = false;
  private isEmailChecked = false;
  private isPasswordChecked = false;
  private isConfirmPasswordChecked = false;
  private isDateChecked = false;


  private loginChangeObserver;
  private emailChangeObserver;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private titleService: Title,
    private toastrService: ToastrService,
    private slimLoadingBarService: SlimLoadingBarService
  ) {
    this.validated = false;
    this.checked = false;
  }

  ngOnInit() {
    this.setTitle();
    this.buildForm();
  }

  setTitle() {
    const title = `Zarejestruj się - Albo Albo`;
    this.titleService.setTitle(title);
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      inputLogin: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z0-9]+')
      ]
      ],
      inputEmail: [null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-z!#$%&\'*+/=?^_`{|}~(),:;<>]{1}[A-Za-z0-9_!#$%&\'*+.-/=?^_`{|}~(),:;<>]+@((?:[\\w]+\\.)+)([a-zA-Z]{2,4})$')
      ]],
      inputPassword: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      inputConfirmPassword: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        PasswordValidation.MatchPassword
      ]],
      inputDate: [null, [
        Validators.required,
        Validators.pattern('^((19[2-9][0-9])|(20[0-1][0-9])|(201[0-7]))-((0[1-9])|(1[0-2]))-(([0][1-9])|([1-2][0-9])|(3[0-1]))$')
      ]]
    });
  }

  checkLogin(value) {
    this.isLoginChecked = true;
    this.isLoginTaken = null;
    this.isCheckingLogin = true;
    this.registerService.checkLogin(value).subscribe(
      res => {
        this.isCheckingLogin = false;
        this.isLoginTaken = false;
      },
      error => {
        this.isCheckingLogin = false;
        this.isLoginTaken = true;
        this.toastrService.error(error);
      });
  }

  checkEmail(value) {
    this.isEmailChecked = true;
    this.isEmailTaken = null;
    this.isCheckingEmail = true;
    this.registerService.checkEmail(value).subscribe(
      res => {
        this.isCheckingEmail = false;
        this.isEmailTaken = false;
      },
      error => {
        this.isCheckingEmail = false;
        this.isEmailTaken = true;
        this.toastrService.error(error);
      });
  }

  onLoginChange(value: string) {
    if (!this.loginChangeObserver) {
      Observable.create(observer => {
        this.loginChangeObserver = observer;
      }).debounceTime(500)
        .distinctUntilChanged()
        .subscribe((login) => this.checkLogin(login));
    }
    this.loginChangeObserver.next(value);
  }

  onEmailChange(value: string) {
    if (!this.emailChangeObserver) {
      Observable.create(observer => {
        this.emailChangeObserver = observer;
      }).debounceTime(500)
        .distinctUntilChanged()
        .subscribe((email) => this.checkEmail(email));
    }
    this.emailChangeObserver.next(value);
  }

  onPasswordChange() {
    this.isPasswordChecked = true;
  }

  onConfirmPasswordChange() {
    this.isConfirmPasswordChecked = true;
  }

  onDateChange() {
    this.isDateChecked = true;
  }

  displayFieldCss(field: string) {
    if (field === 'inputLogin') {
      return {
        'is-invalid': (this.isLoginChecked || this.validated) && (!this.isFieldValid(field) || this.isLoginTaken),
        'is-valid': (this.isLoginChecked || this.validated) && (this.isFieldValid(field) && !this.isLoginTaken)
      };
    } else if (field === 'inputEmail') {
      return {
        'is-invalid': (this.isEmailChecked || this.validated) && (!this.isFieldValid(field) || this.isEmailTaken),
        'is-valid': (this.isEmailChecked || this.validated) && (this.isFieldValid(field) && !this.isEmailTaken)
      };
    } else if (field === 'checkbox') {
      return {
        'text-danger': this.validated && !this.checked,
        'text-success': this.checked
      };
    } else if (field === 'inputPassword') {
      return {
        'is-invalid': (this.validated || this.isPasswordChecked) && !this.isFieldValid(field),
        'is-valid': (this.validated || this.isPasswordChecked) && this.isFieldValid(field)
      };
    } else if (field === 'inputConfirmPassword') {
      return {
        'is-invalid': (this.validated || this.isConfirmPasswordChecked) && !this.isFieldValid(field),
        'is-valid': (this.validated || this.isConfirmPasswordChecked) && this.isFieldValid(field)
      };
    } else if (field === 'inputDate') {
      return {
        'is-invalid': (this.validated || this.isDateChecked) && !this.isFieldValid(field),
        'is-valid': (this.validated || this.isDateChecked) && this.isFieldValid(field)
      };
    } else {
      return {
        'is-invalid': (this.isEmailChecked || this.validated) && !this.isFieldValid(field),
        'is-valid': (this.isEmailChecked || this.validated) && this.isFieldValid(field)
      };
    }
  }

  clickCheckbox() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }

  isFieldValid(field: string) {
    return this.registerForm.get(field).valid;
  }

  isFormValid() {
    return this.registerForm.valid && !this.isLoginTaken && !this.isEmailTaken && this.checked;
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
    if (this.isFormValid()) {
      return true;
    } else {
      this.validateAllFormFields(this.registerForm);
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

  register(login: string, email: string, password: string, birthDate: string) {
    this.isSubmitting = true;
    this.validateForm();

    if (this.validateForm()) {
      this.isSubmitting = true;
      this.slimLoadingBarService.start();
      this.registerService.register(login, email, password, birthDate)
          .subscribe(
            res => {
              this.router.navigate(['/logowanie']);
              let success = 'Żeby aktywować konto, kliknij w link potwierdzający, który wysłaliśmy na Twój adres email.';
              success += ' E-mail nie dotarł? Sprawdź folder SPAM.';
              this.toastrService.success(success, 'Rejestracja się powiodła');
              this.isSubmitting = false;
              this.slimLoadingBarService.complete();
            },
            error => {
              this.isSubmitting = false;
              this.slimLoadingBarService.complete();
              this.toastrService.error(error);
            });
    } else {
      this.isSubmitting = false;
    }
  }

  reset() {
    this.registerForm.reset();
    this.validated = false;
    this.checked = false;
    this.isLoginChecked = false;
    this.isEmailChecked = false;
    this.isPasswordChecked = false;
    this.isConfirmPasswordChecked = false;
    this.isDateChecked = false;
  }
}
