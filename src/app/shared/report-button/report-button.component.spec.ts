import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../../services/auth.service';
import { ReportButtonComponent } from './report-button.component';
import { HttpModule } from '@angular/http';
import { QuestionService } from '../../services/question.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { FormsModule } from '@angular/forms';

describe('ReportButtonComponent', () => {
  let component: ReportButtonComponent;
  let fixture: ComponentFixture<ReportButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportButtonComponent ],
      imports: [
        FormsModule,
        HttpModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        QuestionService,
        SlimLoadingBarService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
