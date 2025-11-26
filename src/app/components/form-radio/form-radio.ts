import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { Field, FieldTree, FormValueControl } from '@angular/forms/signals';
import type { ValidationError } from '@angular/forms/signals';
import { FormError } from "../form-error/form-error";
import { FormNotes } from '../form-notes/form-notes';

interface fieldOption {
  value:string;
  label:string;
}

@Component({
  selector: 'mec-form-radio',
  imports: [Field, FormError, FormNotes],
  templateUrl: './form-radio.html',
  styleUrl: './form-radio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRadio implements FormValueControl<string|number> {

  options = input<fieldOption[]>([]);
  field = input.required<FieldTree<string, string>>()

  readonly value = model<string | number>('');
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
    return `fi-${this.id()}`
  })

  update($event:any) {
    this.value.set(($event.target as HTMLInputElement).value)
  }
}
