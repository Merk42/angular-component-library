import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { Field, disabled, form, required, submit } from '@angular/forms/signals';
import { Button, FormSelect } from 'mec-at';
import { ExampleTemplate } from "../example-template/example-template";

interface DemoData {
  required: string;
  optional: string;
  disabled: string;
}

@Component({
  selector: 'mec-form-select-example',
  imports: [Field, FormSelect, Button, ExampleTemplate],
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
        console.error('Somehow, an error returned:', error);
        throw error
      }
    })
  }
}
