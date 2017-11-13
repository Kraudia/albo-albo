import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errorMessage: String;
  public forgottenPasswordSuccess: String;
  public forgottenPasswordError: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    const title = `Zaloguj się - Albo Albo`;
    this.titleService.setTitle(title);
  }

  login(username: string, password: string) {
    this.errorMessage = '';
    if (username && password) {
      this.authService.login(username, password)
        .subscribe(
          res => {
            this.router.navigate(['/']);
          },
          error => {
            this.errorMessage = 'Nie istnieje użytkownik o podanym loginie i haśle.';
          });
    } else {
      this.errorMessage = 'Wypełnij oba pola.';
    }
  }

  forgot(username: string) {
    this.forgottenPasswordSuccess = null;
    this.forgottenPasswordError = null;

    if (username) {
      this.authService.forgottenPassword(username)
        .subscribe(
          res => {
            this.forgottenPasswordSuccess = 'Wysłaliśmy Ci nowe hasło na e-maila.';
          },
          error => {
            if (error.status === 404) {
              this.forgottenPasswordError = 'Nie znaleziono użytkownika o podanym loginie.';
            } else {
              this.forgottenPasswordError = 'Coś poszło nie tak.';
            }
          }
        );
      } else {
        this.forgottenPasswordError = 'Pole nie może być puste.'
      }
    }
}
