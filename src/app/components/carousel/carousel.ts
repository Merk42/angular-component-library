import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  PLATFORM_ID,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  ElementRef,
  OnInit,
  ViewContainerRef,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';

import { CarouselConfig } from './carousel.config';
import { CarouselContent } from './carousel-content/carousel-content';
import { Button } from "../button/button";

@Component({
  selector: 'mec-carousel',
  imports: [Button],
  templateUrl: './carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel implements OnInit {
	readonly groups = contentChildren(CarouselContent);
	readonly id = input<String>('');
	readonly title = input<String>('');
	readonly pane = viewChild.required<ElementRef>('pane');
	readonly carouselContents = viewChild.required('carouselContents', { read: ViewContainerRef });
	readonly config = input<CarouselConfig>(new CarouselConfig());
  readonly index = input<number>(0);

	currentIndex = signal<number>(this.index());
  isServerRendered = signal<boolean>(false);
	isContentRendered = signal<boolean>(false);
  platformId: Object;

  breakpoint = signal<'small'|'medium'|'large'|'xlarge'>('small');
  goto = signal<number>(0);

  constructor(private breakpointObserver: BreakpointObserver) {
    const platformId = inject<Object>(PLATFORM_ID);

    this.platformId = platformId;

    afterRenderEffect(() => {
			if (this.groups()?.length > 0 && !this.isContentRendered()) {
				this.isContentRendered.set(true);
			}
		});

    effect(() =>{
      this.scrollTo(this.currentIndex());
    })
  }

  ngOnInit(): void {
		if (isPlatformServer(this.platformId)) {
			this.isServerRendered.set(true);
		} else {
			this.isServerRendered.set(false);
			this.windowBreakpointObserver();
		}
	}

  pages = computed(() => {
    const NUMBER_OF_PAGES = Math.ceil(this.groups().length / Math.floor(this.numberItemsAcross()));
    const arrayOfObjects = Array.from({ length: NUMBER_OF_PAGES }, (_, index) => ({
      id: index + 1,
      is_current: this.currentIndex() / Math.floor(this.numAcrossOnScreen()) === index
        || (this.currentIndex() + this.numAcrossOnScreen() >= this.groups().length) && index + 1 === NUMBER_OF_PAGES
    }));
    return arrayOfObjects
  })

  numAcrossOnScreen = computed(() => {
    return this.config().pagination[this.breakpoint()]
  })

  nextIsDisabled = computed<boolean>(() => {
		if (this.currentIndex() === 0) {
			if (this.groups().length <= Math.floor(this.numberItemsAcross())) {
				return true
			} else {
				return false
			}
		} else {
			if (this.currentIndex() >= this.groups().length - Math.floor(this.numberItemsAcross())) { // or length - noScroll??
				return true
			} else {
				return false
			}
		}
  })

  prevIsDisabled = computed<boolean>(() => {
    return this.currentIndex() <= 0;
  })

	scrollTo(index: number) {
    if (isPlatformBrowser(this.platformId)) {
      const PANE = this.pane().nativeElement as HTMLElement;
      const ELEWIDTH = PANE.querySelectorAll('mec-carousel-content')[0].clientWidth;
      // const WIDTH = PANE.clientWidth;
      const GAP = 0
      // need to add OR subtract, from current scroll amount
      const SCROLLTO = (ELEWIDTH + GAP) * index;
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported) {
        PANE.scroll({ left: SCROLLTO, behavior: 'smooth' });
      } else {
        PANE.scrollLeft = SCROLLTO;
      }
      this.currentIndex.set(index);
    }
	}

	windowBreakpointObserver() {
    this.breakpointObserver.observe([
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]).subscribe(result => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.Small]) {
            this.breakpoint.set('small');
          } else if (result.breakpoints[Breakpoints.Medium]) {
            this.breakpoint.set('medium');
          } else if (result.breakpoints[Breakpoints.Large]) {
            this.breakpoint.set('large');
          } else if (result.breakpoints[Breakpoints.XLarge]) {
            this.breakpoint.set('xlarge')
          }
          // this.checkButtonStatus(this.currentIndex());
        }
      });
	}

	numberItemsAcross(): number {
		const SCREEN = this.breakpoint();
		return this.config().pagination[SCREEN];
	}

	prevButton() {
		if (this.prevIsDisabled()) {
			return
		}
		let GOTO = this.currentIndex() - Math.floor(this.numberItemsAcross());
		if (GOTO < 0) {
			GOTO = 0;
		}
    this.currentIndex.set(GOTO);
	}

	nextButton() {
		if (this.nextIsDisabled()) {
			return
		}
		let GOTO = this.currentIndex() + Math.floor(this.numberItemsAcross());
		// cannot have index be higher than length - number across!
		if (GOTO > this.groups().length - Math.floor(this.numberItemsAcross())) {
			GOTO = this.groups().length - Math.floor(this.numberItemsAcross()-1);
		}
		// this.trackButtonClick();
    this.currentIndex.set(GOTO);
	}
}
