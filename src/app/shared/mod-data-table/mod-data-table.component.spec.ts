import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { ModDataTableComponent } from './mod-data-table.component';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';

describe('ModDataTableComponent', () => {
  let component: ModDataTableComponent;
  let fixture: ComponentFixture<ModDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModDataTableComponent
      ],
      imports: [
        HttpModule,
        DataTableModule
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
