import { ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';

export interface tablecolumn {
  key: string;
  label: string;
  alignment?: string;
  unsortable?: boolean;
}

@Component({
  selector: 'mec-table',
  imports: [HeroIcon],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table {
  readonly data = input.required<any[]>()
  readonly columns  = input.required<tablecolumn[]>();

  readonly isCards = input<boolean>(false)

  sortby = signal<string>('');

  displaydata = computed(() => {
    if (this.sortby() !== '') {
      this.data().sort((a, b) => {
      const DESC = this.sortby().charAt(0) === '-' ? true : false;
      const KEY = DESC ? this.sortby().slice(1) : this.sortby();
      const nameA = typeof a[KEY] === 'number' ? a[KEY] : a[KEY].toUpperCase();
      const nameB = typeof b[KEY] === 'number' ? b[KEY] : b[KEY].toUpperCase();
      if (nameA < nameB) {
        return DESC ? 1 : -1;
      }
      if (nameA > nameB) {
        return DESC ? -1 : 1;
      }
      return 0;
    });
    }
    return this.data()
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
