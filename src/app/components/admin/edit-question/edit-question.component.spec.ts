import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../services/auth.service';
import { QuestionService } from '../../../services/question.service';
import { EditQuestionComponent } from './edit-question.component';

describe('EditQuestionComponent', () => {
  let component: EditQuestionComponent;
  let fixture: ComponentFixture<EditQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditQuestionComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule,
        LoadingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        QuestionService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
