import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRangeExample } from './form-range-example';

describe('FormRangeExample', () => {
  let component: FormRangeExample;
  let fixture: ComponentFixture<FormRangeExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRangeExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRangeExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
