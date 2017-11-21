import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Stats } from '../../models/stats';
import { StatsService } from '../../services/stats.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  public user: User;
  public stats: Stats;
  public errorMessage: string;
  public successMessage: string;
  public isLoading = false;
  private subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private statsService: StatsService,
    private titleService: Title,
    private toastrService: ToastrService,
    private slimLoadingBarService: SlimLoadingBarService
  ) { }

  ngOnInit() {
    this.setTitle();
    this.subscription = new Subscription();

    const sub = this.authService.getUserInfo().subscribe(
      response => {
      this.user = response;

      if (this.user) {
        const subscription = this.statsService.getUserStats(this.user.login).subscribe(
          res => {
            this.stats = res;
          }
        );
        this.subscription.add(subscription);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changePassword(oldPassword: string, newPassword: string, repeatNewPassword: string) {
    this.reset();

    if (oldPassword === '' || newPassword === '' || repeatNewPassword === '') {
      this.errorMessage = 'Proszę wypełnić wszystkie pola.';
    } else if (newPassword !== repeatNewPassword) {
      this.errorMessage = 'Źle powtórzono nowe hasło. Spróbuj jeszcze raz.';
    }

    if (!this.errorMessage) {
      this.slimLoadingBarService.start();
      this.isLoading = true;
      const subscription = this.authService.changePassword(oldPassword, newPassword)
        .subscribe(
          res => {
            localStorage.setItem('currentUser', JSON.stringify({
              valid: true,
              username: this.user.login,
              password: newPassword
            }));
            this.successMessage = 'Udało się zmienić hasło.';
            this.toastrService.success(this.successMessage);
            this.isLoading = false;
            this.slimLoadingBarService.complete();
          },
          error => {
            this.errorMessage = 'Niestety próba zmiany hasła się nie powiodła. Spróbuj ponownie.';
            this.toastrService.error(this.errorMessage);
            this.isLoading = false;
            this.slimLoadingBarService.complete();
          }
        );
      this.subscription.add(subscription);
    }
  }

  reset() {
    this.errorMessage = null;
    this.successMessage = null;
  }

  setTitle() {
    const title = `Ustawienia - Albo Albo`;
    this.titleService.setTitle(title);
  }
}
