import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { ModDataTableComponent } from './mod-data-table.component';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';
import { ModService } from '../../services/mod.service';

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
        DataTableModule,
        InfiniteScrollModule,
        LoadingModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        ModService,
        QuestionService,
        SlimLoadingBarService
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
