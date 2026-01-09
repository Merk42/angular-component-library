import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Pagination } from './pagination';

describe('Pagination', () => {
  let component: Pagination;
  let fixture: ComponentFixture<Pagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination]
    }).compileComponents();

    fixture = TestBed.createComponent(Pagination);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('total', 10);
    fixture.componentRef.setInput('max', 5);
    component.current.set(1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct values', () => {
    expect(component.total()).toBe(10);
    expect(component.max()).toBe(5);
    expect(component.current()).toBe(1);
  });

  it('should disable prev button on first page', () => {
    expect(component.isPrevDisabled()).toBe(true);
  });

  it('should disable next button on last page', () => {
    component.current.set(10);
    fixture.detectChanges();
    expect(component.isNextDisabled()).toBe(true);
  });

  it('should go to next page', () => {
    component.goNext();
    expect(component.current()).toBe(2);
  });

  it('should go to previous page', () => {
    component.current.set(2);
    component.goPrev();
    expect(component.current()).toBe(1);
  });

  it('should go to specific page', () => {
    component.goToPage(5);
    expect(component.current()).toBe(5);
  });

  it('should emit newPage event', () => {
    const newPageSpy = vi.fn();
    component.newPage.subscribe(newPageSpy);

    component.goToPage(3);
    expect(newPageSpy).toHaveBeenCalledWith(3);
  });

  it('should generate correct pages array', () => {
    const pages = component.pagesArray();
    expect(pages.length).toBe(5);
    expect(pages[0]).toBe(1);
  });

  it('should identify first page in display', () => {
    expect(component.isFirstInDisplay()).toBe(true);

    component.current.set(8);
    fixture.detectChanges();
    expect(component.isFirstInDisplay()).toBe(false);
  });
});
