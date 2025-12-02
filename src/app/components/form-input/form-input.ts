import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';

@Component({
  selector: 'mec-form-input',
  imports: [FormError, FormNotes],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInput implements FormValueControl<string|number|null> {

  readonly type = input<'color'|'date'|'datetime-local'|'email'|'file'|'month'|'number'|'password'|'range'|'search'|'tel'|'text'|'time'|'url'|'week'>('text');

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

  showerrors = computed(() => {
    return this.invalid() && this.touched()
  })

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }
}
