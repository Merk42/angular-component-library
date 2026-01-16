import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { HeroIcon } from '../../hero-icon/hero-icon';
@Component({
  selector: 'mec-accordion-content',
  templateUrl: './accordion-content.html',
  imports :[HeroIcon],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContent {
  opened = model(false);
  readonly title = input('');
  readonly id = input.required<string>();

  showAriaAttrs: boolean = true;

  readonly toggle = output<any>();

  openedClasses = computed(() => {
    if (this.opened()) {
      return 'bg-white dark:bg-slate-900 dark:text-white border-b-color-white'
    }
    return 'bg-sky-100 dark:bg-sky-900 dark:text-white rounded-b-sm'
  })
}
