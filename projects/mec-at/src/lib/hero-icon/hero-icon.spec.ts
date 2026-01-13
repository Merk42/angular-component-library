import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { HeroIcon } from './hero-icon';

describe('HeroIcon', () => {
  let component: HeroIcon;
  let fixture: ComponentFixture<HeroIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroIcon],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroIcon);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('icon', 'check');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render check icon', () => {
    fixture.componentRef.setInput('icon', 'check');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should render arrow-right icon', () => {
    fixture.componentRef.setInput('icon', 'arrow-right');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should render exclamation-triangle icon', () => {
    fixture.componentRef.setInput('icon', 'exclamation-triangle');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
