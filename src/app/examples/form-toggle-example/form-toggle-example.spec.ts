import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggleExample } from './form-toggle-example';

describe('FormToggleExample', () => {
  let component: FormToggleExample;
  let fixture: ComponentFixture<FormToggleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormToggleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToggleExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
