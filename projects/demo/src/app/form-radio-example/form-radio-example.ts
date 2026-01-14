import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormField, disabled, form, required, submit } from '@angular/forms/signals';
import { Button, FormRadio } from 'mec-at';
import { ExampleTemplate } from "../example-template/example-template";

interface DemoData {
  optional:string;
  required: string;
  disabled: string;
}

@Component({
  selector: 'app-form-radio-example',
  imports: [Button, FormField, FormRadio, ExampleTemplate],
  templateUrl: './form-radio-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormRadioExample {
  submitbutton = viewChild.required(Button);

  optional = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  required = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  disabled = [{
    label:'checked',
    value:'yes'
  },{
    label:'unchecked',
    value:'no'
  }]

  demoModel = signal<DemoData>({
    optional: '',
    required: '',
    disabled: 'yes'
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required)
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
