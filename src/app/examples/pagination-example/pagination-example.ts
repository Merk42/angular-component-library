import { Component, signal } from '@angular/core';
import { Field, customError, max, min, form, submit } from '@angular/forms/signals';
import { Pagination } from "../../components/pagination/pagination";
import { FormInput } from "../../components/form-input/form-input";

interface DemoData {
  current:number;
  total:number;
}

@Component({
  selector: 'mec-pagination-example',
  imports: [Pagination, FormInput, Field],
  templateUrl: './pagination-example.html',
  styleUrl: './pagination-example.css',
})
export class PaginationExample {

  demoModel = signal<DemoData>({
    current: 1,
    total: 10
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    min(schemaPath.current, 1)
    min(schemaPath.total, 1);
    max(schemaPath.current, ({valueOf}) => valueOf(schemaPath.total), {
      message: 'Current page can not be higher than total'
    })
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
