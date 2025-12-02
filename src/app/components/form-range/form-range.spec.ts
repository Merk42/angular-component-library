import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRange } from './form-range';

describe('FormRange', () => {
  let component: FormRange;
  let fixture: ComponentFixture<FormRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
