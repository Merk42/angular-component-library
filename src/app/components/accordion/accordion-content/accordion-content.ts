import { ChangeDetectionStrategy, Component, Input, EventEmitter, HostBinding, Output, input, model } from '@angular/core';
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

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
