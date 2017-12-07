import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReportedCommentsDataTableComponent } from './mod-reported-comments-data-table.component';

describe('ModReportedCommentsDataTableComponent', () => {
  let component: ModReportedCommentsDataTableComponent;
  let fixture: ComponentFixture<ModReportedCommentsDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModReportedCommentsDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedCommentsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
