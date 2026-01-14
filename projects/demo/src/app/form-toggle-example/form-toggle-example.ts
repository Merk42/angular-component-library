import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormField, disabled, form, submit } from '@angular/forms/signals';
import { Button, FormToggle } from 'mec-at';
import { ExampleTemplate } from "../example-template/example-template";

interface DemoData {
  favorite:boolean;
  disabled:boolean;
  checked:boolean;
}

@Component({
  selector: 'app-form-toggle-example',
  imports: [Button, FormField, FormToggle, ExampleTemplate],
  templateUrl: './form-toggle-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormToggleExample {
  submitbutton = viewChild.required(Button);

  demoModel = signal<DemoData>({
    favorite: false,
    disabled: false,
    checked: true
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    disabled(schemaPath.disabled)
    disabled(schemaPath.checked)
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
