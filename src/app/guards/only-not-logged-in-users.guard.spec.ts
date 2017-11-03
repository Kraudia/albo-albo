import { TestBed, inject } from '@angular/core/testing';
import { ConnectionBackend, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { OnlyNotLoggedInUsersGuard } from './only-not-logged-in-users.guard';
import { AuthService } from '../services/auth.service';
import { mockLocalStorage } from './mockLocalStorage';

describe('OnlyNotLoggedInUsersGuard', () => {
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
        OnlyNotLoggedInUsersGuard,
        AuthService,
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    });
  });

  it('should return true if user is not logged in',
    inject([OnlyNotLoggedInUsersGuard], (guard: OnlyNotLoggedInUsersGuard) => {
      localStorage.removeItem('currentUser');
      expect(guard.canActivate()).toBeTruthy();
      expect(guard.canLoad()).toBeTruthy();
    }));

  // it('should return false if user is logged in',
  //   inject([OnlyNotLoggedInUsersGuard], (guard: OnlyNotLoggedInUsersGuard) => {
  //     localStorage.setItem('currentUser', JSON.stringify({
  //       valid: true,
  //       username: 'abc',
  //       password: 'abc'
  //     }));
  //     expect(guard.canActivate()).toBeFalsy();
  //     expect(guard.canLoad()).toBeFalsy();
  // }));

  afterEach(() => {
    localStorage.clear();
  });
});
