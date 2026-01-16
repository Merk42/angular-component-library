import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { HeroIcon } from "../hero-icon/hero-icon";
import { ButtonSmall } from "../button-small/button-small";

@Component({
  selector: 'dialog[mec-drawer]',
  imports: [HeroIcon, ButtonSmall],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "bg-canvas rounded-lg shadow-xl max-w-md ml-auto my-0 border-sky-800 dark:border-sky-900 border-4 border-b-8 h-screen max-h-none"
  }
})
export class Drawer implements OnInit {
  private host = inject(ElementRef);

  platformId: Object;
  constructor() {
    const platformId = inject<Object>(PLATFORM_ID);

    this.platformId = platformId;
  }
  readonly id = input.required<string>();
  readonly formid = input<string>('');
  isAlert: boolean = false;
  ngOnInit(): void {
    const ARIALABEL = this.modal.getAttribute('aria-label');
    if (!ARIALABEL) {
      this.modal.setAttribute('aria-labelledby', this.id() + '-dialog-title');
    }
    this.isAlert = this.modal.getAttribute('role') === 'alertdialog';
    if (this.isAlert) {
      this.modal.addEventListener('cancel', (event:any) => {
        event.preventDefault();
      });
    } else {
      this.modal.addEventListener(
        'click',
        ((event:any) => {
          const rect = this.modal.getBoundingClientRect();
          const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
          if (!isInDialog) {
            this.closeModal()
          }
        })
      );
    }
  }

  showModal(): void {
    if (isPlatformBrowser(this.platformId)) {
      const BODY = document.getElementsByTagName('body')[0];
      const WINDOW_WIDTH = window.innerWidth;
      const VIEWPORT_WIDTH = BODY.clientWidth;
      const SCROLLBAR_WIDTH = WINDOW_WIDTH - VIEWPORT_WIDTH;
      BODY.style.setProperty("--scrollbarwidth", SCROLLBAR_WIDTH + 'px');
    }
    this.modal.showModal();
  }

  closeModal(): void {
    this.modal.addEventListener(
      'animationend',
      (e: AnimationEvent) => {
        if (e.animationName.includes('dialog-out')) {
          this.modal.close();
          this.modal.removeAttribute('closing');
        }
      },
      { once: true }
    );
    this.modal.setAttribute('closing', 'true');

    // this.modal.close();
  }

  private get modal() {
    return this.host.nativeElement;
  }
}
