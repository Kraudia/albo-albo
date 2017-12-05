import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReportedComponent } from './mod-reported.component';

describe('ModReportedComponent', () => {
  let component: ModReportedComponent;
  let fixture: ComponentFixture<ModReportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModReportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
