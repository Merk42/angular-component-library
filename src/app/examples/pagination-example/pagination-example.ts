import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormField, max, min, form, submit } from '@angular/forms/signals';
import { Pagination } from "../../components/pagination/pagination";
import { FormInput } from "../../components/form-input/form-input";
import { Button } from '../../components/button/button';
import { ExampleTemplate } from "../../example-template/example-template";
import { FormCheckbox } from "../../components/form-checkbox/form-checkbox";

interface DemoData {
  max:number;
  total:number;
  firstLast: boolean;
  prevNext: boolean;
}

@Component({
  selector: 'mec-pagination-example',
  imports: [Pagination, FormInput, FormField, ExampleTemplate, FormCheckbox],
  templateUrl: './pagination-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationExample {
  submitbutton = viewChild.required(Button);

  demoModel = signal<DemoData>({
    max: 5,
    total: 10,
    firstLast: false,
    prevNext: false
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    min(schemaPath.max, 1)
    min(schemaPath.total, 1);
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
