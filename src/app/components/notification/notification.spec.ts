import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { Notification } from './notification';

describe('Notification', () => {
  let component: Notification;
  let fixture: ComponentFixture<Notification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(Notification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show notification when number is below min', () => {
    fixture.componentRef.setInput('number', 0);
    fixture.componentRef.setInput('min', 1);
    fixture.detectChanges();

    expect(component.show()).toBe(false);
  });

  it('should show notification when number meets min', () => {
    fixture.componentRef.setInput('number', 5);
    fixture.componentRef.setInput('min', 1);
    fixture.detectChanges();

    expect(component.show()).toBe(true);
  });

  it('should format number correctly', () => {
    fixture.componentRef.setInput('number', 1234);
    fixture.detectChanges();

    expect(component.parsed()).toBe('1,234');
  });
});
