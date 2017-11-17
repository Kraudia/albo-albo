import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PasswordValidation } from './PasswordValidation';
import { validationErrors } from './validationMessages';

import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private titleService: Title,
    private toastrService: ToastrService
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
        Validators.maxLength(30),
        Validators.pattern('^(([A-Za-z0-9]*[0-9][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)|([A-Za-z0-9]*[A-Z][A-Za-z0-9]*[0-9][A-Za-z0-9]*))$')
      ]],
      inputConfirmPassword: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(([A-Za-z0-9]*[0-9][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)|([A-Za-z0-9]*[A-Z][A-Za-z0-9]*[0-9][A-Za-z0-9]*))$'),
        PasswordValidation.MatchPassword
      ]],
      inputDate: [null, [
        Validators.required,
        Validators.pattern('^((19[2-9][0-9])|(20[0-1][0-9])|(201[0-7]))-((0[1-9])|(1[0-2]))-(([0][1-9])|([1-2][0-9])|(3[0-1]))$')
      ]]
    });
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.validated && !this.isFieldValid(field),
      'is-valid': this.validated && this.isFieldValid(field)
    };
  }

  displayCheckboxCss() {
    return {
      'text-danger': this.validated && !this.checked,
      'text-success': this.validated && this.checked
    };
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
    return this.registerForm.valid;
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
    if (this.registerForm.valid && this.checked) {
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
    this.validateForm();

    if (this.validateForm()) {
      this.registerService.register(login, email, password, birthDate)
          .subscribe(
            res => {
              console.log('res = ', res);
              this.router.navigate(['/logowanie']);
              const success = 'Żeby aktywować konto, kliknij w link potwierdzający, który wysłaliśmy na Twój adres email.';
              this.toastrService.success(success, 'Rejestracja się powiodła');
            },
            error => {
              if (error === '409 - OK Conflict') {
                this.toastrService.error('Zajęty login lub mail. Proszę wpisać inne dane.', 'Błąd.');
              } else {
                this.toastrService.error('Twoja rejestracja sie nie udała.', 'Coś poszło nie tak.');
              }
            });
    }
  }

  reset() {
    this.registerForm.reset();
    this.validated = false;
    this.checked = false;
  }
}
