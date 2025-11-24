import { JsonPipe } from '@angular/common';
import { Component, input, computed, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
  imports: [FormError]
})
export class FormInput implements FormValueControl<string|number|null> {

  readonly type = input<string>('text');

  readonly value = model<string | number | null>(null);
  readonly disabled = input(false);
  readonly required = input(false);

  readonly minLength = input<number | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);

  readonly id = input.required()

  invalid = input<boolean>(false);
  errors = input<readonly ValidationError.WithOptionalField[]>([]);

  idfor = computed(() => {
    return `fi-${this.id()}`
  })

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


  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }
}
