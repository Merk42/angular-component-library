import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ValidationError } from '@angular/forms/signals';
import { HeroIcon } from "../hero-icon/hero-icon";

@Component({
  selector: 'mec-form-error',
  templateUrl: './form-error.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'min-h-6 block'
  },
  imports: [HeroIcon]
})
export class FormError {
  errors = input<readonly ValidationError.WithOptionalField[]>([]);
  readonly minLength = input<number | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);

  messages = computed(() => {
    return this.errors().map( error => (
      this.umessage(error)
    ))
  })

  umessage(obj: ValidationError.WithOptionalField) {
    if (obj.message) {
      return obj.message
    }
    if (obj.kind === "required") {
      return `This field is required`
    }
    if (obj.kind === "email") {
      return `Valid email is required`
    }
    if (obj.kind === "minLength") {
      return `Must be at least ${this.minLength()} characters`
    }
    if (obj.kind === "maxLength") {
      return `Must be at most ${this.maxLength()} characters`
    }
    if (obj.kind === "min") {
      return `Must be at least ${this.min()}`
    }
    if (obj.kind === "max") {
      return `Must be at most ${this.max()}`
    }
    return ''
  }
}
