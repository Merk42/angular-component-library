import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default state', () => {
    expect(component.displayState()).toBe('');
    expect(component.isDisabled()).toBe(false);
    expect(component.isAnimating()).toBe(false);
  });

  it('should animate try state', () => {
    component.animateTry();
    fixture.detectChanges();

    expect(component.displayState()).toBe('try');
    expect(component.isAnimating()).toBe(true);
  });
/*
  it('should animate success state and reset', fakeAsync(() => {
    component.animateSuccess();
    fixture.detectChanges();

    expect(component.displayState()).toBe('success');
    expect(component.isAnimating()).toBe(true);

    tick(3000);
    fixture.detectChanges();

    expect(component.displayState()).toBe('');
    expect(component.isAnimating()).toBe(false);
  }));

  it('should animate fail state and reset', fakeAsync(() => {
    component.animateFail();
    fixture.detectChanges();

    expect(component.displayState()).toBe('fail');

    tick(3000);
    fixture.detectChanges();

    expect(component.displayState()).toBe('');
  }));

  it('should disable button after success when disabledafter is true', fakeAsync(() => {
    component.animateSuccess(true);
    fixture.detectChanges();

    tick(3000);
    fixture.detectChanges();

    expect(component.isDisabled()).toBe(true);
  }));

  it('should not disable button after success when disabledafter is false', fakeAsync(() => {
    component.animateSuccess(false);
    fixture.detectChanges();

    tick(3000);
    fixture.detectChanges();

    expect(component.isDisabled()).toBe(false);
  }));
*/
/*
  it('should display correct icon based on state', () => {
    component.displayState.set('try');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mec-hero-icon').getAttribute('ng-reflect-icon')).toBe('arrow-path');

    component.displayState.set('success');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mec-hero-icon').getAttribute('ng-reflect-icon')).toBe('check');

    component.displayState.set('fail');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mec-hero-icon').getAttribute('ng-reflect-icon')).toBe('exclamation-triangle');
  });
  */
});
