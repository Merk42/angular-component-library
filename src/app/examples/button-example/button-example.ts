import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from "../../components/button/button";

@Component({
  selector: 'mec-button-example',
  imports: [Button],
  templateUrl: './button-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExample {

}
