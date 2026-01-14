import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Button, Dialog } from 'mec-at';
@Component({
  selector: 'app-dialog-example',
  imports: [Button, Dialog],
  templateUrl: './dialog-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
