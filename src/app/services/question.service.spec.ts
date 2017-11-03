import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { QuestionService } from './question.service';
import { AuthService } from './auth.service';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    });
  });

  it('should be created', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));
});
