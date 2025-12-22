import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';

@Component({
  selector: 'mec-form-input',
  imports: [FormError, FormNotes],
  templateUrl: './form-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInput implements FormValueControl<string|number|null> {

  readonly type = input<'color'|'date'|'datetime-local'|'email'|'file'|'month'|'number'|'password'|'range'|'search'|'tel'|'text'|'time'|'url'|'week'>('text');
  readonly placeholder = input<string>('');

  readonly value = model<string | number | null>(null);
  readonly disabled = input(false);
  readonly required = input(false);
  readonly readonly = input(false);

  readonly minLength = input<number | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);

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
}

export const PATTERNS = {
  zip: {
    regex: '[0-9]{5}',
    message: 'Zip code must be 5 digits'
  },
  alphanumeric: {
    regex: '^[a-zA-Z0-9]+$',
    message: 'Field must only be letters and or numbers'
  }
}
