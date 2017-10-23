import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './PasswordValidation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private validated: boolean;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.validated = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      inputLogin: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern("[a-zA-Z0-9]+")
      ]
      ],
      inputEmail: [null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(30),
        Validators.pattern("^[A-Za-z!#$%&'*+/=?^_`{|}~(),:;<>]{1}[A-Za-z0-9_!#$%&'*+.-/=?^_`{|}~(),:;<>]+@((?:[\\w]+\\.)+)([a-zA-Z]{2,4})$")
      ]],
      inputPassword: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern("^(([A-Za-z0-9]*[0-9][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)|([A-Za-z0-9]*[A-Z][A-Za-z0-9]*[0-9][A-Za-z0-9]*))$")
      ]],
      inputConfirmPassword: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern("^(([A-Za-z0-9]*[0-9][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)|([A-Za-z0-9]*[A-Z][A-Za-z0-9]*[0-9][A-Za-z0-9]*))$"),
        PasswordValidation.MatchPassword
      ]],
      inputDate: [null, [
        Validators.required,
        Validators.pattern("^((19[2-9][0-9])|(20[0-1][0-9])|(201[0-7]))-((0[1-9])|(1[0-2]))-(([0][1-9])|([1-2][0-9])|(3[0-1]))$")
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
    if (object) return Object.keys(object);
    else return null;
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

  reset(){
    this.registerForm.reset();
  }

  validationMessages = {
    inputLogin: {
      required: 'To pole jest wymagane. ',
      minlength: 'To pole musi zawierać minimum 3 znaki. ',
      maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. ',
      pattern: 'Tylko litery i cyfry są dozwolone. '
    },
    inputEmail: {
      required: 'To pole jest wymagane. ',
      minlength: 'To pole musi zawierać minimum 7 znaków. ',
      maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. ',
      pattern: 'Tylko poprawne adresy są dozwolone.'
    },
    inputPassword: {
      required: 'To pole jest wymagane. ',
      minlength: 'To pole musi zawierać minimum 8 znaków. ',
      maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. ',
      pattern: 'Tylko litery i cyfry są dozwolone. Wymagana jest przynajmniej jedna duża litera i przynajmniej jedna cyfra. '
    },
    inputConfirmPassword: {
      required: 'To pole jest wymagane. ',
      minlength: 'To pole musi zawierać minimum 8 znaków. ',
      maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. ',
      pattern: 'Tylko litery i cyfry są dozwolone. Wymagana jest przynajmniej jedna duża litera i przynajmniej jedna cyfra. ',
      matchPassword: 'Źle powtórzone hasło. '
    },
    inputDate: {
      required: 'To pole jest wymagane. ',
      pattern: 'Wymagany poprawna data. '
    }
  };
}
