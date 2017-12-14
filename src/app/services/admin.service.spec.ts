import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AdminService } from './admin.service';
import { AuthService } from './auth.service';

describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        AdminService
      ]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});
