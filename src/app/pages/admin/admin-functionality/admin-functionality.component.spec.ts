import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFunctionalityComponent } from './admin-functionality.component';

describe('AdminFunctionalityComponent', () => {
  let component: AdminFunctionalityComponent;
  let fixture: ComponentFixture<AdminFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
