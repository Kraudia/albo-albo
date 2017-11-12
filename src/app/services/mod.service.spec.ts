import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ModService } from './mod.service';
import { AuthService } from './auth.service';

describe('ModService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        ModService
      ]
    });
  });

  it('should be created', inject([ModService], (service: ModService) => {
    expect(service).toBeTruthy();
  }));
});
