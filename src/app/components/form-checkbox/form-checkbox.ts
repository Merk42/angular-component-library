import { FormCheckboxControl } from '@angular/forms/signals';
import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';
@Component({
  selector: 'mec-form-checkbox',
  imports: [FormError, FormNotes],
  templateUrl: './form-checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCheckbox implements FormCheckboxControl {

  readonly disabled = input(false);
  readonly required = input(false);

  readonly id = input.required()

  touched = model<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);

  showerrors = computed(() => {
    return this.invalid() && this.touched()
  })

  idfor = computed(() => {
    return `fc-${this.id()}`
  })

  /** Whether the toggle is checked */
  checked = model<boolean>(false);
  toggle() {
    this.checked.update(val => !val);
  }
}
