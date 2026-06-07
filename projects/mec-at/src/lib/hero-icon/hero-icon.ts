import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mec-hero-icon',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-icon.html',
})
export class HeroIcon {
  readonly icon = input.required<'exclamation-triangle'|'minus'|'plus'|'x-mark'|'check'|'arrow-path'|'arrow-left'|'arrow-right'|'arrow-up'|'arrow-down'|'arrows-up-down'|'arrow-long-left'|'arrow-long-right'>()
}
