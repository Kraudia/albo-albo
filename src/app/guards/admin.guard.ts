import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanLoad {
  constructor(
    private authService: AuthService
  ) { }

  canLoad(): Observable<boolean>|Promise<boolean>|boolean|any {
    const user = this.authService.getUser();
    if (user) {
      const roles = user.roles;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === 'ADMIN') {
          return true;
        }
      }
    }

    return false;
  }
}
