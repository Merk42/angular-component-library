import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxExample } from './form-checkbox-example';

describe('FormCheckboxExample', () => {
  let component: FormCheckboxExample;
  let fixture: ComponentFixture<FormCheckboxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckboxExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCheckboxExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
