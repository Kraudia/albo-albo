import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AuthService } from '../../services/auth.service';
import { StatsService } from '../../services/stats.service';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsComponent
      ],
      imports: [
        HttpModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        StatsService,
        ToastrService,
        SlimLoadingBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
