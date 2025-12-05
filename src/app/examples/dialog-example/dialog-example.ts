import { Component, viewChild } from '@angular/core';
import { Dialog } from '../../components/dialog/dialog';
import { Button } from '../../components/button/button';
@Component({
  selector: 'mec-dialog-example',
  imports: [Button, Dialog],
  templateUrl: './dialog-example.html',
  styleUrl: './dialog-example.css',
})
export class DialogExample {
  longmmodal = viewChild.required(Dialog);
  emailmodal = viewChild.required(Dialog);
  confirmbtn = viewChild.required(Button);

  onOK(): void {
    /*
    this.confirmbtn().animateTry();
    window.setTimeout(
      () => {
        var success = Math.floor(Math.random() * 2);
        if (success) {
          this.confirmbtn().animateSuccess();
          window.setTimeout(() => {this.longmmodal().closeModal()}, 1000)
        } else {
          this.confirmbtn().animateFail();
        }
      },
      1000
    )
      */
  }

  onNah(): void {
    this.longmmodal().closeModal();
  }
}
