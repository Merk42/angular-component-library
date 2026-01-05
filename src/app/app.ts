import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInputExample } from "./examples/form-input-example/form-input-example";
import { FormTextareaExample } from "./examples/form-textarea-example/form-textarea-example";
import { FormCheckboxExample } from "./examples/form-checkbox-example/form-checkbox-example";
import { FormRadioExample } from "./examples/form-radio-example/form-radio-example";
import { FormSelectExample } from "./examples/form-select-example/form-select-example";
import { FormExample } from "./examples/form-example/form-example";
import { FormRangeExample } from "./examples/form-range-example/form-range-example";
import { AccordionExample } from "./examples/accordion-example/accordion-example";
import { TabsExample } from "./examples/tabs-example/tabs-example";
import { NotificationExample } from "./examples/notification-example/notification-example";
import { DialogExample } from "./examples/dialog-example/dialog-example";
import { ButtonExample } from "./examples/button-example/button-example";
import { PaginationExample } from "./examples/pagination-example/pagination-example";
import { CarouselExample } from './examples/carousel/carousel-example';
import { FormToggleExample } from './examples/form-toggle-example/form-toggle-example';
import { TableExample } from './examples/table-example/table-example';
@Component({
  selector: 'mec-root',
  imports: [RouterOutlet, FormInputExample, FormTextareaExample, FormCheckboxExample, FormRadioExample, FormSelectExample, FormExample, FormRangeExample, AccordionExample, TabsExample, NotificationExample, DialogExample, ButtonExample, PaginationExample, CarouselExample, FormToggleExample, TableExample],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('angular-component-library');
}
