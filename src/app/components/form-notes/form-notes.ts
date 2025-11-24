import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-form-notes',
  imports: [],
  templateUrl: './form-notes.html',
  styleUrl: './form-notes.css',
})
export class FormNotes {
  readonly minLength = input<number | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);


  lengthCopy = computed(() => {
    if (this.minLength()) {
      if (this.maxLength()) {
        return `Enter ${this.minLength()} to ${this.maxLength()} characters`
      }
      return `Enter at least ${this.minLength()} characters`
    }
    if (this.maxLength()) {
      return `Enter at most ${this.maxLength()} characters`
    }
    return ''
  })

  numberCopy = computed(() => {
    if (this.min()) {
      if (this.max()) {
        return `Enter ${this.min()} to ${this.max()}`
      }
      return `Enter at least ${this.min()}`
    }
    if (this.max()) {
      return `Enter at most ${this.max()}`
    }
    return ''
  })
}
