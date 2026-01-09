import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { FormCheckbox } from './form-checkbox';

describe('FormCheckbox', () => {
  let component: FormCheckbox;
  let fixture: ComponentFixture<FormCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckbox],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCheckbox);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-checkbox');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with unchecked state', () => {
    expect(component.checked()).toBe(false);
  });

  it('should toggle checked state', () => {
    expect(component.checked()).toBe(false);

    component.toggle();
    expect(component.checked()).toBe(true);

    component.toggle();
    expect(component.checked()).toBe(false);
  });

  it('should update checked state on input click', () => {
    const input = fixture.nativeElement.querySelector('input[type="checkbox"]');

    input.click();
    fixture.detectChanges();

    expect(component.checked()).toBe(true);
  });

  it('should generate correct id', () => {
    expect(component.idfor()).toBe('fc-test-checkbox');
  });

  it('should show required indicator when required', () => {
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('*');
  });

  it('should display errors when invalid and touched', () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required' }]);
    component.touched.set(true);
    fixture.detectChanges();

    expect(component.showerrors()).toBe(true);
  });
});
