import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SimpleListComponent } from './simple-list.component';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';

describe('SimpleListComponent', () => {
  let component: SimpleListComponent;
  let fixture: ComponentFixture<SimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleListComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
