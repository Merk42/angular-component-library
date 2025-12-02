import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import {form, Field, required, email, submit} from '@angular/forms/signals';
interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'mec-devdemo',
  imports: [Field],
  templateUrl: './devdemo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devdemo {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email is required'});
    email(schemaPath.email, {message: 'Enter a valid email address'});
    required(schemaPath.password, {message: 'Password is required'});
  });
  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      // In a real app, this would be async:
      // await this.authService.login(credentials);
      console.log('Logging in with:', credentials);
    });
  }
}
