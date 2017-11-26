import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../../services/auth.service';
import { ReportButtonComponent } from './report-button.component';
import { HttpModule } from '@angular/http';

describe('ReportButtonComponent', () => {
  let component: ReportButtonComponent;
  let fixture: ComponentFixture<ReportButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportButtonComponent ],
      imports: [ HttpModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
