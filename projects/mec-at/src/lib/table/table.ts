import { ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';

export interface tablecolumn {
  key: string;
  label: string;
  alignment?: 'left'|'center'|'right';
  unsortable?: boolean;
  sortkey?: string;
}

@Component({
  selector: 'mec-table',
  imports: [HeroIcon],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block overflow-x-auto',
  },
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

  updateSort(column:tablecolumn) {
    const SORTKEY = column.sortkey ? column.sortkey : column.key;
    if (SORTKEY === this.sortby()) {
      this.sortby.set('-' + SORTKEY);
    } else {
      this.sortby.set(SORTKEY);
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
