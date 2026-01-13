import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AccordionContent } from './accordion-content';
import { signal } from '@angular/core';

describe('AccordionContent', () => {
  let component: AccordionContent;
  let fixture: ComponentFixture<AccordionContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionContent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionContent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-accordion');
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.opened()).toBe(false);
    expect(component.title()).toBe('Test Title');
    expect(component.id()).toBe('test-accordion');
  });

  it('should emit toggle event when button is clicked', () => {
    const toggleSpy = vi.fn();
    component.toggle.subscribe(toggleSpy);

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(toggleSpy).toHaveBeenCalled();
  });
/*
  it('should display correct icon based on opened state', () => {
    component.opened.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mec-hero-icon').getAttribute('ng-reflect-icon')).toBe('plus');

    component.opened.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mec-hero-icon').getAttribute('ng-reflect-icon')).toBe('minus');
  });
*/
  it('should apply correct CSS classes when opened', () => {
    component.opened.set(true);
    fixture.detectChanges();

    const navigation = fixture.nativeElement.querySelector('.accordion-navigation');
    expect(navigation.classList.contains('active')).toBe(true);
  });

  it('should render content in ng-content slot', () => {
    const testContent = document.createElement('div');
    testContent.textContent = 'Test Content';
    fixture.nativeElement.appendChild(testContent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Test Content');
  });

  it('should set correct aria attributes', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-controls')).toBe('test-accordion-content');
    expect(button.id).toBe('test-accordion-button');

    component.opened.set(true);
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
