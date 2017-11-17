import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { EmojisModule } from 'ng2-emojis';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { AddQuestionComponent } from './add-question.component';
import { AddQuestionService } from '../../services/add-question.service';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';

describe('AddQuestionComponent', () => {
  let component: AddQuestionComponent;
  let fixture: ComponentFixture<AddQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddQuestionComponent
      ],
      imports: [
        HttpModule,
        EmojisModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        })
      ],
      providers: [
        FormBuilder,
        AddQuestionService,
        AuthService,
        QuestionService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
