import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesRegistrationComponent } from './employees-registration.component';

describe('EmployeesRegistrationComponent', () => {
  let component: EmployeesRegistrationComponent;
  let fixture: ComponentFixture<EmployeesRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesRegistrationComponent]
    });
    fixture = TestBed.createComponent(EmployeesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
