import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormInputExample } from "./form-input-example/form-input-example";
import { FormTextareaExample } from "./form-textarea-example/form-textarea-example";
import { FormCheckboxExample } from "./form-checkbox-example/form-checkbox-example";
import { FormRadioExample } from "./form-radio-example/form-radio-example";
import { FormSelectExample } from "./form-select-example/form-select-example";
import { FormExample } from "./form-example/form-example";
import { FormRangeExample } from "./form-range-example/form-range-example";
import { AccordionExample } from "./accordion-example/accordion-example";
import { TabsExample } from "./tabs-example/tabs-example";
import { NotificationExample } from "./notification-example/notification-example";
import { DialogExample } from "./dialog-example/dialog-example";
import { ButtonExample } from "./button-example/button-example";
import { PaginationExample } from "./pagination-example/pagination-example";
import { CarouselExample } from './carousel/carousel-example';
import { FormToggleExample } from './form-toggle-example/form-toggle-example';
import { TableExample } from './table-example/table-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormInputExample, FormTextareaExample, FormCheckboxExample, FormRadioExample, FormSelectExample, FormExample, FormRangeExample, AccordionExample, TabsExample, NotificationExample, DialogExample, ButtonExample, PaginationExample, CarouselExample, FormToggleExample, TableExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
