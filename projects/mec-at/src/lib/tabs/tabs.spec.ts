import { Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Tabs } from './tabs';
import { TabContent } from './tab-content/tab-content';

@Component({
  selector: 'mec-tabs',
  template: `<mec-tabs>
  <mec-tab-content [title]="'first'" id="first-accordion">
    <p>Nam auctor augue eros, eget ullamcorper elit faucibus vitae. </p>
  </mec-tab-content>
  <mec-tab-content [title]="'second'" id="second-accordion">
    <p>Fusce enim justo, egestas at leo sit amet, ullamcorper cursus tortor. Cras egestas fermentum rutrum. Pellentesque eget ipsum mollis, posuere dui vel, sodales risus.</p>
  </mec-tab-content>
  <mec-tab-content [title]="'third'" id="third-accordion">
    <p>Pellentesque luctus feugiat malesuada. Nunc commodo at nibh quis rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </mec-tab-content>
</mec-tabs>`,
  imports:[TabContent]
})
class ChildStubComponent {}

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabs, TabContent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: Tabs, useValue: ChildStubComponent }
      ]
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
