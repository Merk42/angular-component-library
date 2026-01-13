import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';

@Component({
  selector: 'mec-form-textarea',
  imports: [FormError, FormNotes],
  templateUrl: './form-textarea.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTextarea implements FormValueControl<string|number|null> {

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
