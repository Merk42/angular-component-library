import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'mec-notification',
  imports: [],
  templateUrl: './notification.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative'
  }
})
export class Notification {
  readonly number = input<number>(0);
  readonly min = input<number>(1);

  parsed = computed(() => {
    return new Intl.NumberFormat("en-US").format(this.number())
  })

  show = computed(() => {
    return Number(this.number()) >= Number(this.min());
  })
}
