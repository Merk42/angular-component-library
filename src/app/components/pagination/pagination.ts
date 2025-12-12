import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';

interface Page {
  number: number;
  is_current: boolean
}

@Component({
  selector: 'mec-pagination',
  imports: [],
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pagination {
  newPage = output<number>()

  readonly current = model<number>(1);
  readonly total = input<number>(1);
  readonly max = input<number>(5)

  pagesArray = computed<number[]>(() => {
    let offset = 0;
    const MAX = Number(this.max());
    const BUFFER = Math.ceil(MAX / 2)
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

  goToPage(page:number) {
    this.current.set(page);
    this.newPage.emit(page);
  }
}

