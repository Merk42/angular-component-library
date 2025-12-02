import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';

@Component({
  selector: 'mec-form-range',
  imports: [FormError, FormNotes],
  templateUrl: './form-range.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRange implements FormValueControl<string|number|null> {

  readonly value = model<string | number | null>(null);
  readonly disabled = input(false);
  readonly required = input(false);
  readonly readonly = input(false);

  readonly min = input<number | undefined>(0);
  readonly max = input<number | undefined>(0);

  readonly id = input.required()

  touched = model<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);

  showerrors = computed(() => {
    return this.invalid() && this.touched()
  })

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }

  options = input<{value:number,label:string}[]>([])

  rangeList = computed(() => {
    if (!this.max() || !this.options()) {
      return []
    }
    /*
    const MAX = this.max() || 0;
    if (MAX > this.options()[this.options().length - 1].value) {
      throw new Error("range option out of bounds");
    }
    */
    return this.options().map(user => {
        return {
            value: user.value,
            label: user.label,
            left: this.rangeLeft(user.value)
        };
    });
  })

  rangeLeft(value:number):number {
    const MIN = this.min() || 0;
    const MAX = this.max() || 0;
    return ((value - MIN) / (MAX - MIN)) * 100
  }
}
