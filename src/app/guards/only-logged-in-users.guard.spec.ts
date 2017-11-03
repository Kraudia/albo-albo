import { TestBed, inject } from '@angular/core/testing';
import { ConnectionBackend, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';
import { AuthService } from '../services/auth.service';
import { mockLocalStorage } from './mockLocalStorage';

describe('OnlyLoggedInUsersGuard', () => {
  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        ConnectionBackend,
        OnlyLoggedInUsersGuard,
        AuthService,
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    });
  });

  // it('should return true if user is logged in',
  //   inject([OnlyLoggedInUsersGuard], (guard: OnlyLoggedInUsersGuard) => {
  //     localStorage.setItem('currentUser', JSON.stringify({
  //       valid: true,
  //       username: 'abc',
  //       password: 'abc'
  //     }));
  //     expect(guard.canActivate()).toBeTruthy();
  //     expect(guard.canLoad()).toBeTruthy();
  // }));

  it('should return false and navigate if user is not logged in',
    inject([OnlyLoggedInUsersGuard, Router], (guard: OnlyLoggedInUsersGuard, router: Router) => {
      localStorage.removeItem('currentUser');
      expect(guard.canActivate()).toBeFalsy();
      expect(guard.canLoad()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['logowanie']);
  }));

  afterEach(() => {
    localStorage.clear();
  });
});
