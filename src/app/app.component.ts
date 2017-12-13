import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

import { AuthService } from './services/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  public cookies = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private slimLoadingBarService: SlimLoadingBarService
  ) {}

  ngOnInit() {
    this.authService.loginCurrentUser();
    this.toastrService.overlayContainer = this.toastContainer;

    this.router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });

    if (localStorage.getItem('cookies')) {
      this.cookies = true;
    }
  }

  close() {
    this.cookies = true;
    localStorage.setItem('cookies', 'yes');
  }

  navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      this.slimLoadingBarService.start();
    }
    if (event instanceof NavigationEnd) {
      this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationCancel) {
      this.slimLoadingBarService.stop();
    }
    if (event instanceof NavigationError) {
      this.slimLoadingBarService.stop();
    }
  }
}
moment.locale('pl');
