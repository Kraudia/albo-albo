import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        CommentService
      ]
    });
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
