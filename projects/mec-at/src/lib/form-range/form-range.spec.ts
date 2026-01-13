import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRange } from './form-range';

describe('FormRange', () => {
  let component: FormRange;
  let fixture: ComponentFixture<FormRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRange],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRange);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-range');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
