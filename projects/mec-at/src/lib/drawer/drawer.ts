import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, contentChildren, input, PLATFORM_ID, inject, computed, HostAttributeToken, signal } from '@angular/core';
import { HeroIcon } from "../hero-icon/hero-icon";
import { ButtonSmall } from "../button-small/button-small";
import { Button } from '../button/button';

@Component({
  selector: 'dialog[mec-drawer]',
  imports: [HeroIcon, ButtonSmall],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "bg-canvas rounded-lg shadow-xl w-full md:w-md ml-auto my-0 border-sky-800 dark:border-sky-900 border-4 border-b-8 h-screen max-h-none",
    '[attr.closing]':'isClosing() ? true : null',
    '[attr.aria-labelledby]':'labeledby()',
    '(cancel)': 'canceled($event)',
    '(click)': 'outsideClick($event)',
    '(animationend)': 'closing($event)',
    '(keydown.escape)':'canceled($event)'
  }
})
export class Drawer {
  readonly id = input.required<string>();
  readonly formid = input<string>('');

  private label = inject(new HostAttributeToken('aria-label'), {optional:true});
  private role = inject(new HostAttributeToken('role'), {optional:true});
  private host = inject(ElementRef);

  platformId: Object;

  buttons = contentChildren(Button, {read: ElementRef});

  isAlert = !!this.role && this.role === 'alertdialog';
  isClosing = signal(false)

  hasFooterButton = computed<boolean>(() => {
    if (!this.buttons() || !this.buttons().length) {
      return false
    }
    const CANCEL = this.buttons().some(button => button?.nativeElement.getAttribute('slot') === 'cancel');
    const CONFIRM = this.buttons().some(button => button?.nativeElement.getAttribute('slot') === 'confirm');
    return CANCEL || CONFIRM
  })

  labeledby = computed<string|null>(() => {
    if (!this.label) {
      return this.titleID()
    }
    return null
  })

  titleID = computed<string>(() => {
    return this.id() + '-drawer-title'
  })

  constructor() {
    const platformId = inject<Object>(PLATFORM_ID);
    this.platformId = platformId;
  }


  canceled(event:Event) {
    if (this.isAlert) {
      event?.preventDefault()
    }
  }

  outsideClick(event:any) {
    if (!this.isAlert) {
      const rect = this.modal.getBoundingClientRect();
      const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        this.closeModal()
      }
    }
  }

  closing(event: AnimationEvent) {
    if (event.animationName.includes('drawer-out')) {
      this.modal.close();
      this.isClosing.set(false);
      document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden")
    }
  }

  showModal(): void {
    this.modal.showModal();
  }

  closeModal(): void {
    this.isClosing.set(true);
  }

  private get modal() {
    return this.host.nativeElement;
  }
}
