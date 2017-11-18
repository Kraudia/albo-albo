import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { StatsService } from '../../services/stats.service';
import { UserStatsComponent } from './user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserStatsComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        StatsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
