import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioExample } from './form-radio-example';

describe('FormRadioExample', () => {
  let component: FormRadioExample;
  let fixture: ComponentFixture<FormRadioExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRadioExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRadioExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
