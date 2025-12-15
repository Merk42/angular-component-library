import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { Field, customError, disabled, form, required, submit } from '@angular/forms/signals';
import { FormSelect } from '../../components/form-select/form-select';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
  disabled: string;
}

@Component({
  selector: 'mec-form-select-example',
  imports: [Field, FormSelect, Button],
  templateUrl: './form-select-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSelectExample {
  submitbutton = viewChild.required(Button);

  demoModel = signal<DemoData>({
    required: '',
    optional: '',
    disabled: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);
    disabled(schemaPath.disabled)
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitbutton().animateTry();
    if (!this.demoForm().valid()) {
      this.submitbutton().animateFail();
    }
    submit(this.demoForm, async (form) => {
      try {
        this.submitbutton().animateSuccess();
        return undefined
      } catch (error) {
        this.submitbutton().animateFail();
        return customError( {
          message: 'Somehow, an error returned'
        })
      }
    })
  }
}
