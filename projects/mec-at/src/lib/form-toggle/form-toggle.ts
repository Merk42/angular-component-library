import { FormCheckboxControl } from '@angular/forms/signals';
import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import type { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'mec-form-toggle',
  imports: [],
  templateUrl: './form-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormToggle implements FormCheckboxControl {

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
    return `ft-${this.id()}`
  })

  checkedClasses = computed(() => {
    if (this.checked()) {
      return 'bg-sky-100 dark:bg-sky-600 rounded-full translate-x-[40%]'
    }
    return 'bg-canvas rounded-lg -translate-x-[40%]'
  })

  /** Whether the toggle is checked */
  checked = model<boolean>(false);
  toggle() {
    this.checked.update(val => !val);
  }
}
