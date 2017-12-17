import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { PipesModule } from '../../pipes/pipes.module';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { FavouritesComponent } from './favourites.component';
import { FavouriteQuestionComponent } from './favourite-question/favourite-question.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavouritesComponent,
        FavouriteQuestionComponent
      ],
      imports: [
        HttpModule,
        LoadingModule,
        MomentModule,
        NgbTooltipModule,
        PipesModule,
        RouterTestingModule
      ],
      providers: [
        SlimLoadingBarService,
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
