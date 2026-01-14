import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Button } from "mec-at";
import { ExampleTemplate } from '../example-template/example-template';

@Component({
  selector: 'app-button-example',
  imports: [Button, ExampleTemplate],
  templateUrl: './button-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExample {
  example = viewChild.required(Button);

  animate(t:string) {
    const EXAMPLE = this.example();
    EXAMPLE.animateTry();
    if(t === 'success') {
      setTimeout(() => {
        EXAMPLE.animateSuccess()
      }, 2000);
    }
    if(t === 'fail') {
      setTimeout(() => {
        EXAMPLE.animateFail()
      }, 2000);
    }
  }
}
