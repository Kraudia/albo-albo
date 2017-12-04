import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

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
  public isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
    private toastrService: ToastrService,
    private slimLoadingBarService: SlimLoadingBarService
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
      this.isLoading = true;
      this.slimLoadingBarService.start();
      this.authService.login(username, password)
        .subscribe(
          res => {
            this.router.navigate(['/']);
            this.toastrService.success('Logowanie się powiodło.');
            this.isLoading = false;
            this.slimLoadingBarService.complete();
          },
          error => {
            this.toastrService.error('Nie istnieje użytkownik o podanym loginie lub haśle.');
            this.isLoading = false;
            this.slimLoadingBarService.complete();
          });
    } else {
      this.errorMessage = 'Wypełnij oba pola.';
    }
  }

  forgot(username: string) {
    this.forgottenPasswordSuccess = null;
    this.forgottenPasswordError = null;

    if (username) {
      this.slimLoadingBarService.start();
      this.authService.forgottenPassword(username)
        .subscribe(
          res => {
            this.forgottenPasswordSuccess = 'Wysłaliśmy Ci nowe hasło na e-maila.';
            this.slimLoadingBarService.complete();
            this.toastrService.success(res.message);
          },
          error => {
            this.forgottenPasswordError = error;
            this.slimLoadingBarService.complete();
            this.toastrService.error(error);
          }
        );
      } else {
        this.forgottenPasswordError = 'Pole nie może być puste.';
      }
    }
}
