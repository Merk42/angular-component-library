import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormInput, Notification } from 'mec-at';
import { FormField, form } from '@angular/forms/signals';
import { ExampleTemplate } from "../example-template/example-template";

interface DemoData {
  demo: number;
  min:number;
}

@Component({
  selector: 'app-notification-example',
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
