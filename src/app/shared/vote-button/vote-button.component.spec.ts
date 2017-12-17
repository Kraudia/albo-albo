import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { VoteButtonComponent } from './vote-button.component';
import { AuthService } from '../../services/auth.service';
import { HttpModule } from '@angular/http';

describe('VoteButtonComponent', () => {
  let component: VoteButtonComponent;
  let fixture: ComponentFixture<VoteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoteButtonComponent
      ],
      imports: [
        HttpModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
