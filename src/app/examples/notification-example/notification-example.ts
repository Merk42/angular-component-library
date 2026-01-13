import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Notification } from '../../components/notification/notification';
import { FormInput } from "../../components/form-input/form-input";
import { FormField, form } from '@angular/forms/signals';
import { ExampleTemplate } from "../../example-template/example-template";

interface DemoData {
  demo: number;
  min:number;
}

@Component({
  selector: 'mec-notification-example',
  imports: [Notification, FormField, FormInput, ExampleTemplate],
  templateUrl: './notification-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationExample {
  demoModel = signal<DemoData>({
    demo: 0,
    min: 0
  });

  demoForm = form(this.demoModel, (schemaPath) => {
  });
}
