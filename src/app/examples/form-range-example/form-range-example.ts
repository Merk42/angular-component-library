import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, disabled, email, form, min, minLength, max, maxLength, readonly, required, submit } from '@angular/forms/signals';
import { FormRange } from '../../components/form-range/form-range';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
  disabled:string;
  readonly: string;
}

@Component({
  selector: 'mec-form-range-example',
  imports: [Field, FormRange, Button],
  templateUrl: './form-range-example.html',
  styleUrl: './form-range-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRangeExample {
  ranges = [
  {
    label:'6oz',
    value:170
  },
  {
    label:'8oz',
    value:227
  },
  {
    label:'12oz',
    value:340
  },
  {
    label:'16oz',
    value:454
  },
  {
    label:'20oz',
    value:577
  }
]

  demoModel = signal<DemoData>({
    required: '',
    optional: '',
    disabled: '',
    readonly: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    max(schemaPath.optional, 600)

      disabled(schemaPath.disabled)
      readonly(schemaPath.readonly)
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.demoForm, async (form) => {
      console.log(form)
      try {
        console.log(this.demoForm().value());
        return undefined
      } catch (error) {
        return customError( {
          message: 'Somehow, an error returned'
        })
      }
    })
  }
}
