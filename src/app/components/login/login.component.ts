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
}
