import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Tabs } from './tabs';
import { TabContent } from './tab-content/tab-content';

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabs, TabContent]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should initialize with default alignment', () => {
    expect(component.align()).toBe('left');
  });

  it('should emit click event when tab is clicked', () => {
    const clickSpy = vi.fn();
    component.tabClicked.subscribe(clickSpy);

    component.emitClick();
    expect(clickSpy).toHaveBeenCalledWith(true);
  });

  it('should handle keyboard navigation', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    const stopPropSpy = vi.spyOn(event, 'stopPropagation');
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    component.onKeyDown(event);

    expect(stopPropSpy).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
  */
});
