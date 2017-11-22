import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumQuestionModule } from '../../shared/medium-question/medium-question.module';
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
        MediumQuestionModule
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
