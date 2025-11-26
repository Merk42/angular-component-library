import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, form, required, submit } from '@angular/forms/signals';
import { FormSelect } from '../../components/form-select/form-select';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
}

@Component({
  selector: 'mec-form-select-example',
  imports: [Field, FormSelect, Button],
  templateUrl: './form-select-example.html',
  styleUrl: './form-select-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSelectExample {
  demoModel = signal<DemoData>({
    required: 'bar',
    optional: 'baz'
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);
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
