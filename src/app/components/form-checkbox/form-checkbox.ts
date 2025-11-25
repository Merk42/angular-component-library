import { FormCheckboxControl } from '@angular/forms/signals';
import { Component, computed, input, model, ChangeDetectionStrategy } from '@angular/core';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';
@Component({
  selector: 'mec-form-checkbox',
  imports: [],
  templateUrl: './form-checkbox.html',
  styleUrl: './form-checkbox.css',
})
export class FormCheckbox implements FormCheckboxControl {

  readonly disabled = input(false);
  readonly required = input(false);

  readonly id = input.required()

  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

  /** Whether the toggle is checked */
  checked = model<boolean>(false);
  toggle() {
    this.checked.update(val => !val);
  }
}
