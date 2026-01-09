import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { FormInput } from './form-input';

describe('FormInput', () => {
  let component: FormInput;
  let fixture: ComponentFixture<FormInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInput]
    }).compileComponents();

    fixture = TestBed.createComponent(FormInput);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.type()).toBe('text');
    expect(component.value()).toBeNull();
    expect(component.disabled()).toBe(false);
    expect(component.required()).toBe(false);
    expect(component.readonly()).toBe(false);
  });

  it('should update value on input', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test value';
    input.dispatchEvent(new Event('input'));

    expect(component.value()).toBe('test value');
  });

  it('should compute correct display state', () => {
    expect(component.displayState()).toBe('default');

    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(component.displayState()).toBe('disabled');

    fixture.componentRef.setInput('disabled', false);
    fixture.componentRef.setInput('readonly', true);
    fixture.detectChanges();
    expect(component.displayState()).toBe('readonly');

    fixture.componentRef.setInput('readonly', false);
    fixture.componentRef.setInput('invalid', true);
    component.touched.set(true);
    fixture.detectChanges();
    expect(component.displayState()).toBe('error');
  });

  it('should generate correct id for label', () => {
    expect(component.idfor()).toBe('fi-test-input');
  });

  it('should set touched on blur', () => {
    const input = fixture.nativeElement.querySelector('input');

    expect(component.touched()).toBe(false);

    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(component.touched()).toBe(true);
  });

  it('should display placeholder', () => {
    fixture.componentRef.setInput('placeholder', 'Enter text');
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Enter text');
  });

  it('should show error messages when invalid and touched', () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required' }]);
    component.touched.set(true);
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('mec-form-error');
    expect(errorElement).toBeTruthy();
  });
});
