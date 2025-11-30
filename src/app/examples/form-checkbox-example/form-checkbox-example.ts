import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, disabled, form, submit } from '@angular/forms/signals';
import { FormCheckbox } from '../../components/form-checkbox/form-checkbox';
import { Button } from "../../components/button/button";

interface DemoData {
  favorite:boolean;
  disabled:boolean;
}

@Component({
  selector: 'mec-form-checkbox-example',
  imports: [Button, Field, FormCheckbox],
  templateUrl: './form-checkbox-example.html',
  styleUrl: './form-checkbox-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCheckboxExample {
  demoModel = signal<DemoData>({
    favorite: false,
    disabled: false
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    disabled(schemaPath.disabled)
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
