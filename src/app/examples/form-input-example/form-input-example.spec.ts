import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputExample } from './form-input-example';

describe('FormInputExample', () => {
  let component: FormInputExample;
  let fixture: ComponentFixture<FormInputExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
