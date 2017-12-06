import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReportedCommentsComponent } from './mod-reported-comments.component';

describe('ModReportedCommentsComponent', () => {
  let component: ModReportedCommentsComponent;
  let fixture: ComponentFixture<ModReportedCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModReportedCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
