import { Component, signal } from '@angular/core';
import { Notification } from '../../components/notification/notification';
import { FormInput } from "../../components/form-input/form-input";
import { Field, form } from '@angular/forms/signals';

interface DemoData {
  demo: number;
  min:number;
}

@Component({
  selector: 'mec-notification-example',
  imports: [Notification, Field, FormInput],
  templateUrl: './notification-example.html',
  styleUrl: './notification-example.css',
})
export class NotificationExample {
  demoModel = signal<DemoData>({
    demo: 0,
    min: 0
  });

  demoForm = form(this.demoModel, (schemaPath) => {
  });
}
