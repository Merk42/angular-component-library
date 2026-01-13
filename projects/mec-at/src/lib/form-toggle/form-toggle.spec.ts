import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggle } from './form-toggle';

describe('FormToggle', () => {
  let component: FormToggle;
  let fixture: ComponentFixture<FormToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormToggle],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToggle);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-toggle');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
