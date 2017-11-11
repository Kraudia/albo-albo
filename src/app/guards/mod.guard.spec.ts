import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AuthService } from '../services/auth.service';
import { ModGuard } from './mod.guard';

describe('ModGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        ModGuard
      ]
    });
  });

  it('should ...', inject([ModGuard], (guard: ModGuard) => {
    expect(guard).toBeTruthy();
  }));
});
