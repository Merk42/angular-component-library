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
  MAXTOSHOW = 5;

  readonly current = model<number>(1);
  readonly total = input<number>(1);

  pagesArray = computed<number[]>(() => {
    let offset = 0;
    const BUFFER = Math.ceil(this.MAXTOSHOW / 2)
    const pagestoshow = this.total() >= this.MAXTOSHOW ? this.MAXTOSHOW : this.total();
    if (this.total() > this.MAXTOSHOW) {
      if (this.current() > BUFFER) {
        offset = this.current() - BUFFER;
      }
      if (this.current() > (this.total() - BUFFER)) {
        offset = this.total() - this.MAXTOSHOW;
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

