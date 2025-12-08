import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Button } from "../../components/button/button";

@Component({
  selector: 'mec-button-example',
  imports: [Button],
  templateUrl: './button-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExample {
  example = viewChild.required(Button)

  animate(t:string) {
    console.log('animate', t)
    if(t === 'try') {
      this.example().animateTry()
    }
    if(t === 'success') {
      this.example().animateTry()
      setTimeout(() => {
        this.example().animateSuccess()
      }, 2000);
    }
    if(t === 'fail') {
      this.example().animateTry()
      setTimeout(() => {
        this.example().animateFail()
      }, 2000);
    }
  }
}
