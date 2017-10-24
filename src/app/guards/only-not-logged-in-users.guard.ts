import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OnlyNotLoggedInUsersGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isNotLoggedIn();
  }

  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isNotLoggedIn();
  }
}
