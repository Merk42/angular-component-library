import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadio } from './form-radio';

describe('FormRadio', () => {
  let component: FormRadio;
  let fixture: ComponentFixture<FormRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRadio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRadio);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-radio');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
