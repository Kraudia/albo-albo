import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn())
      return true;
    else {
      this.router.navigate(['logowanie']);
      return false;
    }
  }

  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.isLoggedIn())
      return true;
    else {
      this.router.navigate(['logowanie']);
      return false;
    }
  }
}
