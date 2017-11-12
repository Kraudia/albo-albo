import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ModComponent } from './mod.component';
import { ModDataTableModule } from '../../shared/mod-data-table/mod-data-table.module';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';

describe('ModComponent', () => {
  let component: ModComponent;
  let fixture: ComponentFixture<ModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModComponent
      ],
      imports: [
        HttpModule,
        ModDataTableModule
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
