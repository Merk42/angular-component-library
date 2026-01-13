import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectExample } from './form-select-example';

describe('FormSelectExample', () => {
  let component: FormSelectExample;
  let fixture: ComponentFixture<FormSelectExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSelectExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelectExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
