import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextareaExample } from './form-textarea-example';

describe('FormTextareaExample', () => {
  let component: FormTextareaExample;
  let fixture: ComponentFixture<FormTextareaExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTextareaExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTextareaExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
