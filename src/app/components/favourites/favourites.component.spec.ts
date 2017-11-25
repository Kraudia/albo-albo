import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { FavouriteQuestionModule } from '../../shared/favourite-question/favourite-question.module';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavouritesComponent
      ],
      imports: [
        HttpModule,
        FavouriteQuestionModule,
        LoadingModule
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