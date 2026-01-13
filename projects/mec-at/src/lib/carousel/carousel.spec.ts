import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { Carousel } from './carousel';
import { CarouselConfig } from './carousel.config';

describe('Carousel', () => {
  let component: Carousel;
  let fixture: ComponentFixture<Carousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousel],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carousel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-carousel');
    fixture.componentRef.setInput('title', 'Test Carousel');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should initialize with default values', () => {
    expect(component.currentIndex()).toBe(0);
    expect(component.isServerRendered()).toBe(false);
    expect(component.isContentRendered()).toBe(false);
  });

  it('should initialize with custom config', () => {
    const customConfig = new CarouselConfig({ small: 3, medium: 5, large: 7, xlarge: 9, xxlarge: 11 });
    fixture.componentRef.setInput('config', customConfig);
    fixture.detectChanges();

    expect(component.config().pagination.small).toBe(3);
    expect(component.config().pagination.medium).toBe(5);
  });

  it('should disable prev button at start', () => {
    expect(component.isPrevDisabled()).toBe(true);
  });

  it('should enable next button when there are more items', () => {
    // This would need actual carousel content items to test properly
    expect(component.isNextDisabled).toBeDefined();
  });

  it('should update current index', () => {
    component.currentIndex.set(5);
    expect(component.currentIndex()).toBe(5);
  });
  */
});
