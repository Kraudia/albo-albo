import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AddQuestionService } from './add-question.service';
import { AuthService } from './auth.service';

describe('AddQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AddQuestionService,
        AuthService
      ]
    });
  });

  it('should be created', inject([AddQuestionService], (service: AddQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
