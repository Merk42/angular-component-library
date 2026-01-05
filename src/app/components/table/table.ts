import { ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';
@Component({
  selector: 'mec-table',
  imports: [HeroIcon],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table {
  readonly data = input.required<any[]>()
  readonly columns  = input.required<any[]>()

  sortby = signal<string>('');

  displaydata = computed(() => {
    const RESULT = [];
    if (this.sortby() !== '') {
      this.data().sort((a, b) => {
      const DESC = this.sortby().charAt(0) === '-' ? true : false;
      const KEY = DESC ? this.sortby().slice(1) : this.sortby();
      const nameA = a[KEY].toUpperCase(); // ignore upper and lowercase
      const nameB = b[KEY].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return DESC ? 1 : -1;
      }
      if (nameA > nameB) {
        return DESC ? -1 : 1;
      }
      return 0;
    });
    }
    for (const R of this.data()) {
      const NEWROW = []
      for (const C of this.columns()) {
        NEWROW.push(R[C.key])
      }
      RESULT.push(NEWROW)
    }
    return RESULT;
  })

  updateSort(key:string) {
    if (key === this.sortby()) {
      this.sortby.set('-' + key);
    } else {
      this.sortby.set(key);
    }
  }

  columnicon(key:string) {
    if(key === this.sortby()) {
      return 'arrow-up'
    }
    if('-' + key === this.sortby()) {
      return 'arrow-down'
    }
    return 'arrows-up-down'
  }

}
