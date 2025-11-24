import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInputExample } from "./examples/form-input-example/form-input-example";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormInputExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-component-library');
}
