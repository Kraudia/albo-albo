export const validationErrors = {
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
    maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. '
  },
  inputConfirmPassword: {
    required: 'To pole jest wymagane. ',
    minlength: 'To pole musi zawierać minimum 8 znaków. ',
    maxlength: 'To pole musi zawierać nie więcej niż 30 znaków. ',
    matchPassword: 'Źle powtórzone hasło. '
  }
};
