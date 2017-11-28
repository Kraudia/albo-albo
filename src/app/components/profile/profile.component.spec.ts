import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../services/auth.service';
import { PipesModule } from '../../pipes/pipes.module';
import { StatsService } from '../../services/stats.service';
import { ProfileComponent } from './profile.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { ProfileQuestionComponent } from './profile-tab/profile-question/profile-question.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        UserStatsComponent,
        ProfileQuestionComponent
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
        PipesModule
      ],
      providers: [
        AuthService,
        StatsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
