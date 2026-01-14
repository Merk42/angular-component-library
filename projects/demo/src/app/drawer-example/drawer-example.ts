import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Button, Drawer } from 'mec-at';
@Component({
  selector: 'app-drawer-example',
  imports: [Button, Drawer],
  templateUrl: './drawer-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerExample {
  longmmodal = viewChild.required(Drawer);
  emailmodal = viewChild.required(Drawer);
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
