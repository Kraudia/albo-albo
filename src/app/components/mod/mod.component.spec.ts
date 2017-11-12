import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CloudModule } from '../../shared/cloud/cloud.module';
import { ModComponent } from './mod.component';
import { ModDataTableModule } from '../../shared/mod-data-table/mod-data-table.module';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { ModService } from '../../services/mod.service';

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
        CloudModule,
        ModDataTableModule
      ],
      providers: [
        AuthService,
        ModService,
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
