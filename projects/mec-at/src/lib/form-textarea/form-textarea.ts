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

  displayClasses = computed<string>(() => {
    switch (this.displayState()) {
      case 'error':
        return 'bg-rose-200 border-rose-800 dark:bg-rose-800 dark:border-rose-900'
      case 'disabled':
        return 'bg-neutral-300 border-neutral-600 dark:bg-neutral-600 dark:border-neutral800'
      case 'readonly':
        return 'bg-neutral-100 border-transparent dark:bg-neutral-900'
      default:
        return 'bg-slate-500/10 border-sky-800'
    }
  })

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }
}
