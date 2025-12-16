import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';
import { Button } from '../button/button';

interface Page {
  number: number;
  is_current: boolean
}

@Component({
  selector: 'mec-pagination',
  imports: [Button, HeroIcon],
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pagination {
  newPage = output<number>()

  readonly current = model<number>(1);
  readonly total = input<number>(1);
  readonly max = input<number>(5);

  readonly showPrevNext = input<boolean>(false);
  readonly showFirstLast = input<boolean>(false);

  pagesArray = computed<number[]>(() => {
    let offset = 0;
    const MAX = Number(this.max());
    if (this.total() < MAX) {
       return Array.from({ length: this.total() }, (_, i) => i + 1);
    }
    const BUFFER = Math.ceil(MAX / 2);
    const pagestoshow = this.total() >= MAX ? MAX : this.total();
    if (this.total() > MAX) {
      if (this.current() > BUFFER) {
        offset = this.current() - BUFFER;
      }
      if (this.current() > (this.total() - BUFFER)) {
        offset = this.total() - MAX;
      }
    }
    return [...Array(pagestoshow).keys()].map(x => x + 1 + offset);
  })

  displayPages = computed<Page[]>(() => {
    return this.pagesArray().map(number => {
      return {
        number: number,
        is_current: Number(number) === Number(this.current())
      }; // Creates an object with a 'value' property
    });
  })

  isFirstInDisplay = computed<boolean>(() => {
    return !!this.displayPages().filter(page => page.number === 1).length
  })

  isLastInDisplay = computed<boolean>(() => {
    return !!this.displayPages().filter(page => page.number === this.total()).length
  })

  isSecondInDisplay = computed<boolean>(() => {
    return !!this.displayPages().filter(page => page.number === 2).length
  })

  isSecondToLastInDisplay = computed<boolean>(() => {
    return !!this.displayPages().filter(page => page.number === this.total() - 1).length
  })

  isPrevDisabled = computed(() => {
    return this.current() === 1;
  })

  isNextDisabled = computed(() => {
    return this.current() === this.total();
  })

  goToPage(page:number) {
    this.current.set(page);
    this.newPage.emit(page);
  }

  goPrev() {
    this.current.set(this.current() - 1)
  }

  goNext() {
    this.current.set(this.current() + 1)
  }
}


