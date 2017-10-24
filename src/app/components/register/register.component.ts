import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './PasswordValidation';
import { validationErrors } from './validationMessages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private validated: boolean;
  public registerForm: FormGroup;
  public validationMessages = validationErrors;

  constructor(private formBuilder: FormBuilder) {
    this.validated = false;
  }

  ngOnInit() {
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

  onSubmit() {
    this.validated = true;
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      console.log('form submitted');
    } else {
      console.log('form invalid');
      this.validateAllFormFields(this.registerForm);
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

  reset() {
    this.registerForm.reset();
  }
}
