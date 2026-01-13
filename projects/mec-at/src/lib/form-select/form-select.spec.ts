import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelect } from './form-select';

describe('FormSelect', () => {
  let component: FormSelect;
  let fixture: ComponentFixture<FormSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSelect],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelect);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-select');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
