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

  displayState = computed<'default'|'error'|'disabled'|'readonly'>(() => {
    if (this.disabled()) {
      return 'disabled'
    }
    if (this.readonly()) {
      return 'readonly'
    }
    if (this.invalid() && this.touched()) {
      return 'error'
    }
    return 'default'
  })

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }

  options = input<{value:number,label:string}[]>([])

  rangeList = computed(() => {
    if (!this.max() || !this.options() || !this.options().length) {
      return []
    }

    const OPTIONS = this.options().sort((a, b) => a.value - b.value);
    const MAX = this.max() || 0;
    const MIN = this.min() || 0;

    if (MAX < OPTIONS[this.options().length - 1].value) {
      throw new Error(`option ${OPTIONS[this.options().length - 1].value} is greater than max of ${MAX}`);
    }
    if (MIN > OPTIONS[0].value) {
      throw new Error(`option ${OPTIONS[0].value} is less than min of ${MIN}`);
    }

    return OPTIONS.map(user => {
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
