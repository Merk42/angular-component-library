import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { Field, customError, disabled, form, min, max, submit } from '@angular/forms/signals';
import { FormRange } from '../../components/form-range/form-range';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
  disabled: string;
}

@Component({
  selector: 'mec-form-range-example',
  imports: [Field, FormRange, Button],
  templateUrl: './form-range-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRangeExample {
  submitbutton = viewChild.required(Button);

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

offsetranges = [
  {
    label:'50',
    value: 50
  },
  {
    label:'100',
    value: 100
  }

]

  demoModel = signal<DemoData>({
    required: '',
    optional: '',
    disabled: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    max(schemaPath.optional, 600)
    max(schemaPath.required, 150)

      disabled(schemaPath.disabled)
      max(schemaPath.disabled, 100)


      min(schemaPath.required, 32)
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
